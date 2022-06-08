import { WebSocketServer } from "ws";
import { PORT } from "./config.js";

const server = new WebSocketServer({
  port: PORT,
  path: "/messages"
});

const connections = [];

server.on("connection", socket => {
  connections.push(socket);

  socket.on("message", function message(data) {
    connections.forEach(client => {
      client.send(data.toString());
    })
  });
});