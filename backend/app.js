const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const crypto = require("crypto");

const app = express();
const httpServer = createServer(app);

const io = new Server(httpServer, {
    cors: {
        origin: "*",
    },
});

io.on("connection", (socket) => {
    
    const userId = 'user_' + crypto.randomBytes(4).toString('hex');
    
    socket.broadcast.emit("userJoined", userId);

    socket.emit("userId", userId);

    socket.on("clientMessage", (text) => {
        console.log(`Message from ${userId}: ${text}`);
        io.emit("serverMessage", { userId, text });
    });

    socket.on("typing", (nickname) => {
        socket.broadcast.emit("typing", nickname);
    });

    socket.on("disconnect", () => {
        socket.broadcast.emit("userLeft", userId);
    });
});

httpServer.listen(3000, () => {
    console.log("Server is running on port 3000");
});
