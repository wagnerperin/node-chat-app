const express = require('express');
const app = express();
const socketIO = require('socket.io');
const http = require('http');
const path = require('path');
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

const server = http.createServer(app);
var io = socketIO(server);

io.on('connection', (socket) => {
    console.log('New user connected');

    socket.on('disconnect', () => {
        console.log('Client disconnected.');
    });
});

app.use(express.static(publicPath));

server.listen(port, () => {
    console.log(`Server is up on ${port}`);
});