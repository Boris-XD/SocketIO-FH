import { useContext, useState } from "react";
import { SocketContext } from "../context/SocketContext";

const BandAdd = () => {
  
  const { socket } = useContext(SocketContext);
  const [newBandName, setNewBandName] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    if (newBandName.trim().length > 3){
      socket.emit("add-new-band", newBandName);
      setNewBandName('');
    }
  };

  const onChangeName = (event) => {
    setNewBandName(event.target.value);
  };

  return (
    <>
      <h3>Agregar Banda</h3>
      <form onSubmit={onSubmit}>
        <input
          className="form-control"
          placeholder="Nuevo nombre de la banda"
          onChange={onChangeName}
          value={newBandName}
        />
      </form>
    </>
  );
};

export default BandAdd;
