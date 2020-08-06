const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const PORT = process.env.PORT || 5000;

const router = require('./router');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

//Here we build the logic that takes a socket from the client side and registers when a user has connected
io.on('connection', (socket) => {
    console.log('We have a connection!!')
    // This registers when the user has left
    socket.on('disconnect', () => {
        console.log('User has left!');
    })
});

//This is where we call as a middleware
app.use(router);

server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));