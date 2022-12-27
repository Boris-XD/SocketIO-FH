import { useContext } from "react";
import { SocketContext } from "../context/SocketContext";
import BandAdd from "../components/BandAdd";
import BandList from "../components/BandList";
import ChartBand from "../components/ChartBand";

function Home() {

  const { online } = useContext(SocketContext);

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
        <div className="col-6">
          <ChartBand />
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-8">
          <BandList />
        </div>
        <div className="col-4">
          <BandAdd />
        </div>
      </div>
    </div>
  );
}

export default Home;
