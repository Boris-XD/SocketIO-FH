const socket = io('http://localhost:8070');




const formulario = document.getElementById('miFormulario');
const mensaje = document.getElementById('txtMensaje');
const showMessages = document.getElementById('showMessages');

formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log("Enviando el fomulario" + mensaje.value)
    socket.emit('mensaje-to-server', {
        message: mensaje.value,
    })
})


socket.on('mensaje-from-server', (data) => {
    console.log("llega desde el Backend "  + data);
    showMessages.innerHTML += `<li>${data.message}</li>`;
})
