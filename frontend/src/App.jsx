import { useState } from "react";
import { useEffect } from "react";
import BandAdd from "./components/BandAdd";
import BandList from "./components/BandList";
import { io } from "socket.io-client";

const connectSocketServer = io("http://localhost:8070");

function App() {
  const [socket] = useState(connectSocketServer);
  const [online, setOnline] = useState(false);
  const [bands, setBands] = useState([]);

  useEffect(() => {
    socket.on("connect", () => {
      setOnline(socket.connected);
    });
  }, [socket]);

  useEffect(() => {
    socket.on("disconnect", () => {
      setOnline(socket.connected);
    });
  }, [socket]);

  useEffect(() => {
    socket.on("current-bands", (bands) => {
      setBands(bands);
    });
  }, [socket]);

  const vote = (id) => {
    socket.emit("votes-adding", id);
  };

  const removeBand = (id) => {
    socket.emit("remove-band", id);
  };

  const changeName = (id, name) => {
    const newName = { id, name };
    socket.emit("change-name-band", newName);
  };

  const addBand = (bandName) => {
    socket.emit("add-new-band", bandName);
  }

  return (
    <div className="container">
      <div className="alert">
        <p>
          Service status:
          {online ? (
            <span className="text-success">
              {" "}
              <b>Online</b>
            </span>
          ) : (
            <span className="text-danger">
              {" "}
              <b>Offline</b>
            </span>
          )}
        </p>
      </div>
      <h1>Band Names</h1>
      <hr />
      <div className="row">
        <div className="col-8">
          <BandList
            data={bands}
            vote={vote}
            removeBand={removeBand}
            changeName={changeName}
          />
        </div>
        <div className="col-4">
          <BandAdd addBand={addBand}/>
        </div>
      </div>
    </div>
  );
}

export default App;
