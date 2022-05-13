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
    user: call.request.getUserId(),
    title: call.request.getTitle(),
    content: call.request.getContent(),
    timestamp: new Date(),
  });

  callback(null, response);
}
