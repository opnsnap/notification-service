// package: notification.v1
// file: notification.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class NotifyRequest extends jspb.Message { 
    getUserId(): string;
    setUserId(value: string): NotifyRequest;
    getTitle(): string;
    setTitle(value: string): NotifyRequest;
    getContent(): string;
    setContent(value: string): NotifyRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NotifyRequest.AsObject;
    static toObject(includeInstance: boolean, msg: NotifyRequest): NotifyRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NotifyRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NotifyRequest;
    static deserializeBinaryFromReader(message: NotifyRequest, reader: jspb.BinaryReader): NotifyRequest;
}

export namespace NotifyRequest {
    export type AsObject = {
        userId: string,
        title: string,
        content: string,
    }
}

export class NotifyResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NotifyResponse.AsObject;
    static toObject(includeInstance: boolean, msg: NotifyResponse): NotifyResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NotifyResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NotifyResponse;
    static deserializeBinaryFromReader(message: NotifyResponse, reader: jspb.BinaryReader): NotifyResponse;
}

export namespace NotifyResponse {
    export type AsObject = {
    }
}
