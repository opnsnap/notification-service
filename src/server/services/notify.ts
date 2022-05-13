import { ServerUnaryCall, sendUnaryData } from "@grpc/grpc-js";
import { NotifyRequest, NotifyResponse } from "../../proto/notification_pb";
import { NotificationModel } from "../db";
import { notificationEvent } from "../event";

export function notify(
  call: ServerUnaryCall<NotifyRequest, NotifyResponse>,
  callback: sendUnaryData<NotifyResponse>
) {
  const response = new NotifyResponse();

  // When we receive a notification, we want to do the following:
  // 1. Save the notification to the database
  // 2. Emit the notification event
  //

  // Insert into database
  //
  const notification = new NotificationModel({
    ...call.request.toObject(),
    timestamp: new Date(),
  });
  notification.save((err) => {
    if (err) {
      callback(err, response);
    }
  });

  // Send notification event
  //
  notificationEvent.emit("notify", {
    user: call.request.getUserId(),
    title: call.request.getTitle(),
    content: call.request.getContent(),
    timestamp: new Date(),
  });

  callback(null, response);
}
