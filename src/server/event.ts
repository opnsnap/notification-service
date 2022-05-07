import EventEmitter from "events";

export interface IEvent {
  user: string;
  text: string;
}

export const notificationEvent = new EventEmitter();
