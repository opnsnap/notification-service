import * as $protobuf from "protobufjs";
/** Namespace notification. */
export namespace notification {

    /** Namespace v1. */
    namespace v1 {

        /** Represents a NotifyService */
        class NotifyService extends $protobuf.rpc.Service {

            /**
             * Constructs a new NotifyService service.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             */
            constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

            /**
             * Creates new NotifyService service using the specified rpc implementation.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             * @returns RPC service. Useful where requests and/or responses are streamed.
             */
            public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): NotifyService;

            /**
             * Calls Notify.
             * @param request NotifyRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and NotifyResponse
             */
            public notify(request: notification.v1.INotifyRequest, callback: notification.v1.NotifyService.NotifyCallback): void;

            /**
             * Calls Notify.
             * @param request NotifyRequest message or plain object
             * @returns Promise
             */
            public notify(request: notification.v1.INotifyRequest): Promise<notification.v1.NotifyResponse>;
        }

        namespace NotifyService {

            /**
             * Callback as used by {@link notification.v1.NotifyService#notify}.
             * @param error Error, if any
             * @param [response] NotifyResponse
             */
            type NotifyCallback = (error: (Error|null), response?: notification.v1.NotifyResponse) => void;
        }

        /** Properties of a NotifyRequest. */
        interface INotifyRequest {

            /** NotifyRequest userId */
            userId?: (string|null);

            /** NotifyRequest message */
            message?: (string|null);
        }

        /** Represents a NotifyRequest. */
        class NotifyRequest implements INotifyRequest {

            /**
             * Constructs a new NotifyRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: notification.v1.INotifyRequest);

            /** NotifyRequest userId. */
            public userId: string;

            /** NotifyRequest message. */
            public message: string;

            /**
             * Creates a new NotifyRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NotifyRequest instance
             */
            public static create(properties?: notification.v1.INotifyRequest): notification.v1.NotifyRequest;

            /**
             * Encodes the specified NotifyRequest message. Does not implicitly {@link notification.v1.NotifyRequest.verify|verify} messages.
             * @param message NotifyRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: notification.v1.INotifyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified NotifyRequest message, length delimited. Does not implicitly {@link notification.v1.NotifyRequest.verify|verify} messages.
             * @param message NotifyRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: notification.v1.INotifyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NotifyRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns NotifyRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): notification.v1.NotifyRequest;

            /**
             * Decodes a NotifyRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns NotifyRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): notification.v1.NotifyRequest;

            /**
             * Verifies a NotifyRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a NotifyRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns NotifyRequest
             */
            public static fromObject(object: { [k: string]: any }): notification.v1.NotifyRequest;

            /**
             * Creates a plain object from a NotifyRequest message. Also converts values to other types if specified.
             * @param message NotifyRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: notification.v1.NotifyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this NotifyRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a NotifyResponse. */
        interface INotifyResponse {

            /** NotifyResponse message */
            message?: (string|null);
        }

        /** Represents a NotifyResponse. */
        class NotifyResponse implements INotifyResponse {

            /**
             * Constructs a new NotifyResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: notification.v1.INotifyResponse);

            /** NotifyResponse message. */
            public message: string;

            /**
             * Creates a new NotifyResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NotifyResponse instance
             */
            public static create(properties?: notification.v1.INotifyResponse): notification.v1.NotifyResponse;

            /**
             * Encodes the specified NotifyResponse message. Does not implicitly {@link notification.v1.NotifyResponse.verify|verify} messages.
             * @param message NotifyResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: notification.v1.INotifyResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified NotifyResponse message, length delimited. Does not implicitly {@link notification.v1.NotifyResponse.verify|verify} messages.
             * @param message NotifyResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: notification.v1.INotifyResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NotifyResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns NotifyResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): notification.v1.NotifyResponse;

            /**
             * Decodes a NotifyResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns NotifyResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): notification.v1.NotifyResponse;

            /**
             * Verifies a NotifyResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a NotifyResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns NotifyResponse
             */
            public static fromObject(object: { [k: string]: any }): notification.v1.NotifyResponse;

            /**
             * Creates a plain object from a NotifyResponse message. Also converts values to other types if specified.
             * @param message NotifyResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: notification.v1.NotifyResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this NotifyResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}
