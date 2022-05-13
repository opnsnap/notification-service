import * as dotenv from "dotenv";
import express from "express";
import { Server } from "socket.io";
import * as http from "http";
import * as grpc from "@grpc/grpc-js";
import { notify } from "./services/notify";
import { NotifyService } from "../proto/notification_grpc_pb";
import { INotification, notificationEvent } from "./event";
import * as database from "./db";

dotenv.config();

const app = express();
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true, limit: "1mb" }));
app.use("/ntfy/healthcheck", require("express-healthcheck")());

const server = http.createServer(app);
const io = new Server(server);

// Database
//
database
  .connect(
    process.env.MONGODB_HOST!,
    process.env.MONGODB_PORT!,
    process.env.MONGODB_DATABASE!,
    process.env.MONGODB_USER!,
    process.env.MONGODB_PASSWORD!
  )
  .then((msg) => {
    console.log(msg);

    // REST
    //
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

    // Websocket
    //
    io.of("/ntfy/ws").on("connection", (socket) => {
      console.log("a user connected");

      // TODO: Authenticated users with middleware and then only send it to one instead of broadcasting
      // See:
      // - https://socket.io/docs/v4/middlewares/
      // - https://stackoverflow.com/questions/36788831/authenticating-socket-io-connections-using-jwt
      notificationEvent.on("notify", function (data: INotification) {
        console.log(data);
        socket.broadcast.emit("notify", data);
      });

      socket.on("disconnect", () => {
        console.log("user disconnected");
      });
    });
  })
  .catch((err) => {
    console.log(err);
    process.exit(-1);
  });
