import EventEmitter from "events";

interface IFriendRequest {
  // Who initiated the request
  from: string;

  // Who received the request (the one who has to accept it)
  to: string;
}

interface IUser {
  username: string;
  friends: string[];
  friendRequests: IFriendRequest[];
}

export interface INotification {
  userId: string;
  title: string;
  content: string;
  timestamp: Date;
}

export class Notification implements INotification {
  userId: string;
  title: string;
  content: string;
  timestamp: Date;

  constructor(userId: string, title: string, content: string, timestamp: Date) {
    this.userId = userId;
    this.title = title;
    this.content = content;
    this.timestamp = timestamp;
  }
}

export const notificationEvent = new EventEmitter();
