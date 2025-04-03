const socket = io();

const onlineEl = document.querySelector('#label-online');
const offlineEl = document.querySelector('#label-offline');
const textInput = document.querySelector('#text');
const sendBtn = document.querySelector('#send');

socket.on('connect', () => {
    onlineEl.style.display = 'block';
    offlineEl.style.display = 'none';
});

socket.on('disconnect', () => {
    offlineEl.style.display = 'block';
    onlineEl.style.display = 'none';
});

socket.on('send-msg', (payload, ) => {
    console.log(payload);
});

sendBtn.addEventListener('click', () => {
    socket.emit('send-msg', textInput.value, response => {
        console.log('Desde el server', response);
    });
});