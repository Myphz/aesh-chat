import { WebSocketServer } from "ws";
import { PORT } from "./config.js";
import express from "express";
import http from "http";

// Static file serve
const app = express();
const server = http.createServer(app);
app.use(express.static("dist"));

server.listen(PORT);

const wsServer = new WebSocketServer({
  server,
  path: "/messages"
});

const connections = [];

wsServer.on("connection", socket => {
  connections.push(socket);

  socket.on("message", function message(data) {
    connections.forEach(client => {
      client.send(data.toString());
    })
  });
});