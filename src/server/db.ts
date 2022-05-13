import mongoose from "mongoose";
import { model, Schema } from "mongoose";
import { INotification } from "./event";

export function connect(
  host: String,
  port: Number | String,
  database: String,
  username: String,
  password: String
) {
  if (!host || !port || !database || !username || !password) {
    throw new Error("Missing required parameters");
  }

  return new Promise<string>(async (resolve, reject) => {
    try {
      console.log("Trying to connect to database...");
      mongoose.connect(`mongodb://${username}:${password}@${host}:${port}`, {
        // @ts-ignore
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
    } catch (error: any) {
      reject(error);
    }

    resolve("Successfully connected to database");
  });
}

const notificationSchema = new Schema<INotification>({
  user: { type: String, required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  timestamp: { type: Date, required: true },
});

export let NotificationModel = model<INotification>(
  "Notification",
  notificationSchema
);
