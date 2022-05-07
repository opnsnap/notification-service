# Protobuf

## Compile with `protobufjs`

You need `protobufjs` globally installed:

```
npm i -g protobufjs
```

After that, you can run:
```
$> pbjs -t static-module -w commonjs -o bundle.js notification.proto
$> pbts -o bundle.d.ts bundle.js
```
