const express = require("express");
const http = require("http");
const socketio = require("socket.io");
const path = require("path");
const Sockets = require("./sockets");
const cors = require("cors");
class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    //htt server
    this.server = http.createServer(this.app);

    // Configuracion del Socket Server
    this.io = socketio(this.server, {
      cors: {
        origin: "*",
        methods: ["GET", "POST"],
      },
    });
  }

  middlewares() {
    // Desplegar el directorio publico
    this.app.use(express.static(path.resolve(__dirname, "../public")));

    // Añadiendo cors
    this.app.use(cors());
  }

  configurationSockets() {
    // Instanciando el Socket
    new Sockets(this.io);
  }

  execute() {
    // Inicializar Middlewares
    this.middlewares();

    // Inicializar Sockets
    this.configurationSockets();

    // Inicializar el server
    this.server.listen(this.port, () => {
      console.log(`Server running on port: ${this.port}`);
    });
  }
}

module.exports = Server;
