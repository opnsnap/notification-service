// package: notification.v1
// file: notification.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as notification_pb from "./notification_pb";

interface INotifyService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    notify: INotifyService_INotify;
}

interface INotifyService_INotify extends grpc.MethodDefinition<notification_pb.NotifyRequest, notification_pb.NotifyResponse> {
    path: "/notification.v1.Notify/Notify";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<notification_pb.NotifyRequest>;
    requestDeserialize: grpc.deserialize<notification_pb.NotifyRequest>;
    responseSerialize: grpc.serialize<notification_pb.NotifyResponse>;
    responseDeserialize: grpc.deserialize<notification_pb.NotifyResponse>;
}

export const NotifyService: INotifyService;

export interface INotifyServer extends grpc.UntypedServiceImplementation {
    notify: grpc.handleUnaryCall<notification_pb.NotifyRequest, notification_pb.NotifyResponse>;
}

export interface INotifyClient {
    notify(request: notification_pb.NotifyRequest, callback: (error: grpc.ServiceError | null, response: notification_pb.NotifyResponse) => void): grpc.ClientUnaryCall;
    notify(request: notification_pb.NotifyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: notification_pb.NotifyResponse) => void): grpc.ClientUnaryCall;
    notify(request: notification_pb.NotifyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: notification_pb.NotifyResponse) => void): grpc.ClientUnaryCall;
}

export class NotifyClient extends grpc.Client implements INotifyClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public notify(request: notification_pb.NotifyRequest, callback: (error: grpc.ServiceError | null, response: notification_pb.NotifyResponse) => void): grpc.ClientUnaryCall;
    public notify(request: notification_pb.NotifyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: notification_pb.NotifyResponse) => void): grpc.ClientUnaryCall;
    public notify(request: notification_pb.NotifyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: notification_pb.NotifyResponse) => void): grpc.ClientUnaryCall;
}
