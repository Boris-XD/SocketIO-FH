import { useMemo, useState, useEffect } from "react";
import { io } from "socket.io-client";

const useSocket = (serverPath) => {
  const socket = useMemo(() => io(serverPath), [serverPath]);

  const [online, setOnline] = useState(false);

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

  return {
    socket,
    online,
  };
};

export default useSocket;
