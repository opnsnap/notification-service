// Only for testing purposes

import { credentials } from "@grpc/grpc-js";
import { NotifyClient } from "../proto/notification_grpc_pb";
import { NotifyRequest } from "../proto/notification_pb";

const client = new NotifyClient(
  "localhost:50051",
  credentials.createInsecure()
);

const request = new NotifyRequest();
request.setUserId("Matthias");
request.setTitle("Important Message");
request.setContent("Hello World!");

client.notify(request, (error, response) => {
  if (error) {
    console.error(error);

    process.exit(1);
  }

  console.info("Response:", response.toObject());
});
