import {
  ServerUnaryCall,
  sendUnaryData,
  Server,
  ServerCredentials,
} from "@grpc/grpc-js";
import { notification } from "../../proto/bundle";

export function notify(
  call: ServerUnaryCall<
    notification.v1.NotifyRequest,
    notification.v1.NotifyResponse
  >,
  callback: sendUnaryData<notification.v1.NotifyResponse>
) {
  const response = new notification.v1.NotifyResponse();

  console.log("Something");

  // TODO: Handle the request

  callback(null, response);
}
