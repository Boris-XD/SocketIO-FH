import { useContext, useEffect, useState } from "react";
import { SocketContext } from "../context/SocketContext";

const BandList = () => {

  const { socket } = useContext(SocketContext);
  const [bands, setBands] = useState([]);

  useEffect(() => {
    socket.on("current-bands", (bands) => {
      setBands(bands);
    });
  }, [socket]);

  const onChangeName = (event, id) => {
    const newName = event.target.value;
    setBands((bands) =>
      bands.map((band) => {
        if (band.id === id) band.name = newName;
        return band;
      })
    );
  };

  const onBlurName = (id, name) => {
    const newName = { id, name };
    socket.emit("change-name-band", newName);
  };

  const vote = ( id ) => {
    socket.emit("votes-adding", id);
  }

  const removeBand = ( id ) => {
    socket.emit("remove-band", id);
  }

  const createRows = () => {
    return bands.map((band) => (
      <tr key={band.id}>
        <td>
          <button onClick={() => vote(band.id)} className="btn btn-primary">
            {" "}
            +1{" "}
          </button>
        </td>
        <td>
          <input
            className="form-control"
            value={band.name}
            onChange={(event) => onChangeName(event, band.id)}
            onBlur={() => onBlurName(band.id, band.name)}
          />
        </td>
        <td>
          <h3> {band.votes}</h3>
        </td>
        <td>
          <button
            onClick={() => removeBand(band.id)}
            className="btn btn-danger"
          >
            Borrar
          </button>
        </td>
      </tr>
    ));
  };

  return (
    <>
      <table className="table table-stripped">
        <thead>
          <tr>
            <th></th>
            <th>Nombre</th>
            <th>Votos</th>
            <th>Borrar</th>
          </tr>
        </thead>
        <tbody>{createRows()}</tbody>
      </table>
    </>
  );
};

export default BandList;
