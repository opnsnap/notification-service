/* eslint-disable */
import * as Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "notification.v1";

export interface NotifyRequest {
  userId: string;
  message: string;
}

export interface NotifyResponse {
  message: string;
}

function createBaseNotifyRequest(): NotifyRequest {
  return { userId: "", message: "" };
}

export const NotifyRequest = {
  encode(
    message: NotifyRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NotifyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNotifyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userId = reader.string();
          break;
        case 2:
          message.message = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NotifyRequest {
    return {
      userId: isSet(object.userId) ? String(object.userId) : "",
      message: isSet(object.message) ? String(object.message) : "",
    };
  },

  toJSON(message: NotifyRequest): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = message.userId);
    message.message !== undefined && (obj.message = message.message);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<NotifyRequest>, I>>(
    object: I
  ): NotifyRequest {
    const message = createBaseNotifyRequest();
    message.userId = object.userId ?? "";
    message.message = object.message ?? "";
    return message;
  },
};

function createBaseNotifyResponse(): NotifyResponse {
  return { message: "" };
}

export const NotifyResponse = {
  encode(
    message: NotifyResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NotifyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNotifyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.message = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NotifyResponse {
    return {
      message: isSet(object.message) ? String(object.message) : "",
    };
  },

  toJSON(message: NotifyResponse): unknown {
    const obj: any = {};
    message.message !== undefined && (obj.message = message.message);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<NotifyResponse>, I>>(
    object: I
  ): NotifyResponse {
    const message = createBaseNotifyResponse();
    message.message = object.message ?? "";
    return message;
  },
};

export interface NotifyService {
  Notify(request: NotifyRequest): Promise<NotifyResponse>;
}

export class NotifyServiceClientImpl implements NotifyService {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Notify = this.Notify.bind(this);
  }
  Notify(request: NotifyRequest): Promise<NotifyResponse> {
    const data = NotifyRequest.encode(request).finish();
    const promise = this.rpc.request(
      "notification.v1.NotifyService",
      "Notify",
      data
    );
    return promise.then((data) => NotifyResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
        Exclude<keyof I, KeysOfUnion<P>>,
        never
      >;

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
