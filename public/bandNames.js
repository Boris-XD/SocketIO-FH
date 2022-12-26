const socket = io('http://localhost:8070');


socket.on('current-bands', (data) => {
    data.forEach( band => {
        console.log(band.name);
    });
})
