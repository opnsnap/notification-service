import * as dotenv from "dotenv";
import express from "express";
import { Server } from "socket.io";
import * as http from "http";

dotenv.config({ path: __dirname + "/../.env" });

const app = express();
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true, limit: "1mb" }));
app.use("/ntfy/healthcheck", require("express-healthcheck")());

const server = http.createServer(app);
const io = new Server(server);

io.of("/ntfy/ws").on("connection", (socket) => {
  console.log("a user connected");

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

server.listen(process.env.PORT || 8080, () => {
  console.log(`Server is running on port ${process.env.PORT || 8080}`);
});
