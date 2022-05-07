// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var notification_pb = require('./notification_pb.js');

function serialize_notification_v1_NotifyRequest(arg) {
  if (!(arg instanceof notification_pb.NotifyRequest)) {
    throw new Error('Expected argument of type notification.v1.NotifyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_notification_v1_NotifyRequest(buffer_arg) {
  return notification_pb.NotifyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_notification_v1_NotifyResponse(arg) {
  if (!(arg instanceof notification_pb.NotifyResponse)) {
    throw new Error('Expected argument of type notification.v1.NotifyResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_notification_v1_NotifyResponse(buffer_arg) {
  return notification_pb.NotifyResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var NotifyService = exports.NotifyService = {
  notify: {
    path: '/notification.v1.Notify/Notify',
    requestStream: false,
    responseStream: false,
    requestType: notification_pb.NotifyRequest,
    responseType: notification_pb.NotifyResponse,
    requestSerialize: serialize_notification_v1_NotifyRequest,
    requestDeserialize: deserialize_notification_v1_NotifyRequest,
    responseSerialize: serialize_notification_v1_NotifyResponse,
    responseDeserialize: deserialize_notification_v1_NotifyResponse,
  },
};

exports.NotifyClient = grpc.makeGenericClientConstructor(NotifyService);
