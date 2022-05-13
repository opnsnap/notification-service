import EventEmitter from "events";

export interface INotification {
  user: string;
  title: string;
  content: string;
  timestamp: Date;
}

export class Notification implements INotification {
  user: string;
  title: string;
  content: string;
  timestamp: Date;

  constructor(user: string, title: string, content: string, timestamp: Date) {
    this.user = user;
    this.title = title;
    this.content = content;
    this.timestamp = timestamp;
  }
}

export const notificationEvent = new EventEmitter();
