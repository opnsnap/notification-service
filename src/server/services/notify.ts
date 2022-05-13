import {
  ServerUnaryCall,
  sendUnaryData,
  Server,
  ServerCredentials,
} from "@grpc/grpc-js";
import { NotifyRequest, NotifyResponse } from "../../proto/notification_pb";
import { notificationEvent } from "../event";

export function notify(
  call: ServerUnaryCall<NotifyRequest, NotifyResponse>,
  callback: sendUnaryData<NotifyResponse>
) {
  const response = new NotifyResponse();

  notificationEvent.emit("notify", {
    user: "Matthias",
    title: "Alexander",
    content: "Hey, what's up?",
  });

  callback(null, response);
}
