import { client } from "@repo/db/client";
import { WebSocketServer } from "ws";

const server = new WebSocketServer({
  port: 3001,
});

server.on("connection", async (socket) => {
  const userws = await client.user.create({
    data: {
      username: Math.random().toString(),
      password: Math.random().toString(),
    },
  });

  socket.send("Hi ther you are connected to the ws server port:3001");
});
