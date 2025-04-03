const socketController = socket => {

    console.log('Cliente conectado');

    socket.on('send-msg', (payload, callback) => {

        const response = {
            name: payload,
            date: '24/01/2025',
            id: 123123
        }

        callback(response);

        socket.broadcast.emit('send-msg', payload);
    });

    socket.on('disconnect', () => {
        console.log('Cliente desconectado');
    })
};
module.exports = {
    socketController
}