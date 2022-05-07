import * as dotenv from "dotenv";
import express from "express";
import { Server } from "socket.io";
import * as http from "http";
import * as grpc from "@grpc/grpc-js";
import { ServerUnaryCall } from "grpc";
import { notify } from "./services/notify";
import { NotifyService } from "../proto/notification_grpc_pb";
import EventEmitter from "events";
import { IEvent, notificationEvent } from "./event";

dotenv.config({ path: __dirname + "/../.env" });

const app = express();
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true, limit: "1mb" }));
app.use("/ntfy/healthcheck", require("express-healthcheck")());

const server = http.createServer(app);
const io = new Server(server);

io.of("/ntfy/ws").on("connection", (socket) => {
  console.log("a user connected");

  // TODO: Figure out how to uniquely identify a user
  notificationEvent.on("notify-<user_id>", function (data: IEvent) {
    console.log(data);
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

server.listen(process.env.PORT || 8080, () => {
  console.log(`Server is running on port ${process.env.PORT || 8080}`);
});

// GRPC
//
const grpcServer = new grpc.Server();
grpcServer.addService(NotifyService, { notify });
grpcServer.bindAsync(
  "0.0.0.0:50051",
  grpc.ServerCredentials.createInsecure(),
  () => {
    grpcServer.start();
  }
);
