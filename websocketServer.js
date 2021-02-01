const fs = require("fs")
const path = require("path")
const http = require("http")
const WebSocket = require('ws');

const httpport = 8081
const httpserver = http.createServer();
const websocketServer = new WebSocket.Server({
	server: httpserver,
	perMessageDeflate: {
		threshold: 150, // Size (in bytes) below which messages should not be compressed.
		memLevel: 9,
		level: 9,
		serverMaxWindowBits: 15,
	}
});

let ping = "ping".repeat(5000)
websocketServer.on('connection', function connection(websocket) {

	websocket.send(ping)

	websocket.on('message', function incoming(message) {
		websocket.send(ping)
	});
});



httpserver.listen(httpport, () => {
	console.log(`Server running at localhost:${httpport}/`);
});
