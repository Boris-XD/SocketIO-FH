const BandList = require('./band-list')
class Sockets {
    constructor( io ) {
        this.io = io;
        this.bandList = new BandList();
        this.socketEvents();
    }

    socketEvents(){
        this.io.on("connection", (socket) => {
            console.log("Connection created ")
            
            //Emitir al cliente conectado, todas las bandas actuales
            socket.emit('current-bands', this.bandList.getBands());

            //Recibir los votos añadidos
            socket.on('votes-adding', (id) => {
                this.bandList.increaseVotes(id);
                //Send all bands after the change
                this.io.emit('current-bands', this.bandList.getBands());
            })

            //Removiendo una banda
            socket.on('remove-band', (id) => {
                this.bandList.removeBand(id);
                //Send all bands after the change
                this.io.emit('current-bands', this.bandList.getBands());
            })

            //Change name of a band
            socket.on('change-name-band', (newName) => {
                this.bandList.changeName(newName.id, newName.name);
                //Send all bands after the change
                this.io.emit('current-bands', this.bandList.getBands());
            })

            //Añadiendo una nueva banda
            socket.on('add-new-band', (bandName) => {
                this.bandList.addBand(bandName);
                 //Send all bands after the change
                 this.io.emit('current-bands', this.bandList.getBands());
            })

        });
    }

}

module.exports = Sockets;