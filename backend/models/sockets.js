const TicketList = require("./ticket-list");


class Sockets {

    constructor( io ) {

        this.io = io;
        this.socketEvents();
        this.tickets = new TicketList();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', ( socket ) => {
            console.log('Cliente Conectado');

            socket.on('create-ticket',(data, callBackFront) => {
                const newTicket = this.tickets.crearTicket();
                callBackFront(newTicket);
            })

            socket.on('siguiente-ticket', (ticket, callBackFront) => {
                const ticketAssigned = this.tickets.asignarTicket(ticket.agente, ticket.escritorio);
                callBackFront(ticketAssigned);

                this.io.emit('tickets-asignados', this.tickets.ultimos13);
            });
                      
        
        });
    }


}


module.exports = Sockets;