import React from "react";
import { useEffect, useState } from "react";

const BandList = ({ data, vote, removeBand, changeName }) => {
  const [bands, setBands] = useState([]);
  useEffect(() => {
    setBands(data);
  }, [data]);

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
    changeName(id, name);
  };

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
