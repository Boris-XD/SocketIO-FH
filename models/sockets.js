class Sockets {
    constructor( io ) {
        this.io = io;
        this.socketEvents();
    }

    socketEvents(){
        this.io.on("connection", (socket) => {
            console.log("Connection created ")
            //Escuchar evento: mensaje-cliente
            socket.on("mensaje-to-server", (data) => {
              this.io.emit('mensaje-from-server', data);
            });
        });
    }

}

module.exports = Sockets;