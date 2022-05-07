/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.notification = (function() {

    /**
     * Namespace notification.
     * @exports notification
     * @namespace
     */
    var notification = {};

    notification.v1 = (function() {

        /**
         * Namespace v1.
         * @memberof notification
         * @namespace
         */
        var v1 = {};

        v1.NotifyService = (function() {

            /**
             * Constructs a new NotifyService service.
             * @memberof notification.v1
             * @classdesc Represents a NotifyService
             * @extends $protobuf.rpc.Service
             * @constructor
             * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
             * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
             * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
             */
            function NotifyService(rpcImpl, requestDelimited, responseDelimited) {
                $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
            }

            (NotifyService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = NotifyService;

            /**
             * Creates new NotifyService service using the specified rpc implementation.
             * @function create
             * @memberof notification.v1.NotifyService
             * @static
             * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
             * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
             * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
             * @returns {NotifyService} RPC service. Useful where requests and/or responses are streamed.
             */
            NotifyService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
                return new this(rpcImpl, requestDelimited, responseDelimited);
            };

            /**
             * Callback as used by {@link notification.v1.NotifyService#notify}.
             * @memberof notification.v1.NotifyService
             * @typedef NotifyCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {notification.v1.NotifyResponse} [response] NotifyResponse
             */

            /**
             * Calls Notify.
             * @function notify
             * @memberof notification.v1.NotifyService
             * @instance
             * @param {notification.v1.INotifyRequest} request NotifyRequest message or plain object
             * @param {notification.v1.NotifyService.NotifyCallback} callback Node-style callback called with the error, if any, and NotifyResponse
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(NotifyService.prototype.notify = function notify(request, callback) {
                return this.rpcCall(notify, $root.notification.v1.NotifyRequest, $root.notification.v1.NotifyResponse, request, callback);
            }, "name", { value: "Notify" });

            /**
             * Calls Notify.
             * @function notify
             * @memberof notification.v1.NotifyService
             * @instance
             * @param {notification.v1.INotifyRequest} request NotifyRequest message or plain object
             * @returns {Promise<notification.v1.NotifyResponse>} Promise
             * @variation 2
             */

            return NotifyService;
        })();

        v1.NotifyRequest = (function() {

            /**
             * Properties of a NotifyRequest.
             * @memberof notification.v1
             * @interface INotifyRequest
             * @property {string|null} [userId] NotifyRequest userId
             * @property {string|null} [message] NotifyRequest message
             */

            /**
             * Constructs a new NotifyRequest.
             * @memberof notification.v1
             * @classdesc Represents a NotifyRequest.
             * @implements INotifyRequest
             * @constructor
             * @param {notification.v1.INotifyRequest=} [properties] Properties to set
             */
            function NotifyRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * NotifyRequest userId.
             * @member {string} userId
             * @memberof notification.v1.NotifyRequest
             * @instance
             */
            NotifyRequest.prototype.userId = "";

            /**
             * NotifyRequest message.
             * @member {string} message
             * @memberof notification.v1.NotifyRequest
             * @instance
             */
            NotifyRequest.prototype.message = "";

            /**
             * Creates a new NotifyRequest instance using the specified properties.
             * @function create
             * @memberof notification.v1.NotifyRequest
             * @static
             * @param {notification.v1.INotifyRequest=} [properties] Properties to set
             * @returns {notification.v1.NotifyRequest} NotifyRequest instance
             */
            NotifyRequest.create = function create(properties) {
                return new NotifyRequest(properties);
            };

            /**
             * Encodes the specified NotifyRequest message. Does not implicitly {@link notification.v1.NotifyRequest.verify|verify} messages.
             * @function encode
             * @memberof notification.v1.NotifyRequest
             * @static
             * @param {notification.v1.INotifyRequest} message NotifyRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            NotifyRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.userId);
                if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
                return writer;
            };

            /**
             * Encodes the specified NotifyRequest message, length delimited. Does not implicitly {@link notification.v1.NotifyRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof notification.v1.NotifyRequest
             * @static
             * @param {notification.v1.INotifyRequest} message NotifyRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            NotifyRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a NotifyRequest message from the specified reader or buffer.
             * @function decode
             * @memberof notification.v1.NotifyRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {notification.v1.NotifyRequest} NotifyRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            NotifyRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.notification.v1.NotifyRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
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
            };

            /**
             * Decodes a NotifyRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof notification.v1.NotifyRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {notification.v1.NotifyRequest} NotifyRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            NotifyRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a NotifyRequest message.
             * @function verify
             * @memberof notification.v1.NotifyRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            NotifyRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.userId != null && message.hasOwnProperty("userId"))
                    if (!$util.isString(message.userId))
                        return "userId: string expected";
                if (message.message != null && message.hasOwnProperty("message"))
                    if (!$util.isString(message.message))
                        return "message: string expected";
                return null;
            };

            /**
             * Creates a NotifyRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof notification.v1.NotifyRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {notification.v1.NotifyRequest} NotifyRequest
             */
            NotifyRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.notification.v1.NotifyRequest)
                    return object;
                var message = new $root.notification.v1.NotifyRequest();
                if (object.userId != null)
                    message.userId = String(object.userId);
                if (object.message != null)
                    message.message = String(object.message);
                return message;
            };

            /**
             * Creates a plain object from a NotifyRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof notification.v1.NotifyRequest
             * @static
             * @param {notification.v1.NotifyRequest} message NotifyRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            NotifyRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.userId = "";
                    object.message = "";
                }
                if (message.userId != null && message.hasOwnProperty("userId"))
                    object.userId = message.userId;
                if (message.message != null && message.hasOwnProperty("message"))
                    object.message = message.message;
                return object;
            };

            /**
             * Converts this NotifyRequest to JSON.
             * @function toJSON
             * @memberof notification.v1.NotifyRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            NotifyRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return NotifyRequest;
        })();

        v1.NotifyResponse = (function() {

            /**
             * Properties of a NotifyResponse.
             * @memberof notification.v1
             * @interface INotifyResponse
             * @property {string|null} [message] NotifyResponse message
             */

            /**
             * Constructs a new NotifyResponse.
             * @memberof notification.v1
             * @classdesc Represents a NotifyResponse.
             * @implements INotifyResponse
             * @constructor
             * @param {notification.v1.INotifyResponse=} [properties] Properties to set
             */
            function NotifyResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * NotifyResponse message.
             * @member {string} message
             * @memberof notification.v1.NotifyResponse
             * @instance
             */
            NotifyResponse.prototype.message = "";

            /**
             * Creates a new NotifyResponse instance using the specified properties.
             * @function create
             * @memberof notification.v1.NotifyResponse
             * @static
             * @param {notification.v1.INotifyResponse=} [properties] Properties to set
             * @returns {notification.v1.NotifyResponse} NotifyResponse instance
             */
            NotifyResponse.create = function create(properties) {
                return new NotifyResponse(properties);
            };

            /**
             * Encodes the specified NotifyResponse message. Does not implicitly {@link notification.v1.NotifyResponse.verify|verify} messages.
             * @function encode
             * @memberof notification.v1.NotifyResponse
             * @static
             * @param {notification.v1.INotifyResponse} message NotifyResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            NotifyResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.message);
                return writer;
            };

            /**
             * Encodes the specified NotifyResponse message, length delimited. Does not implicitly {@link notification.v1.NotifyResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof notification.v1.NotifyResponse
             * @static
             * @param {notification.v1.INotifyResponse} message NotifyResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            NotifyResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a NotifyResponse message from the specified reader or buffer.
             * @function decode
             * @memberof notification.v1.NotifyResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {notification.v1.NotifyResponse} NotifyResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            NotifyResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.notification.v1.NotifyResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
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
            };

            /**
             * Decodes a NotifyResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof notification.v1.NotifyResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {notification.v1.NotifyResponse} NotifyResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            NotifyResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a NotifyResponse message.
             * @function verify
             * @memberof notification.v1.NotifyResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            NotifyResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.message != null && message.hasOwnProperty("message"))
                    if (!$util.isString(message.message))
                        return "message: string expected";
                return null;
            };

            /**
             * Creates a NotifyResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof notification.v1.NotifyResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {notification.v1.NotifyResponse} NotifyResponse
             */
            NotifyResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.notification.v1.NotifyResponse)
                    return object;
                var message = new $root.notification.v1.NotifyResponse();
                if (object.message != null)
                    message.message = String(object.message);
                return message;
            };

            /**
             * Creates a plain object from a NotifyResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof notification.v1.NotifyResponse
             * @static
             * @param {notification.v1.NotifyResponse} message NotifyResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            NotifyResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.message = "";
                if (message.message != null && message.hasOwnProperty("message"))
                    object.message = message.message;
                return object;
            };

            /**
             * Converts this NotifyResponse to JSON.
             * @function toJSON
             * @memberof notification.v1.NotifyResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            NotifyResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return NotifyResponse;
        })();

        return v1;
    })();

    return notification;
})();

module.exports = $root;
