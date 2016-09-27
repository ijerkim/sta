// Load required modules
var http    = require("http");              // http server core module
var https    = require("https");              // sssssss
var express = require("express");           // web framework external module
var io      = require("socket.io");         // web socket external module
var fs = require('fs');         // sssssss
var easyrtc = require("easyrtc");           // EasyRTC external module


var options = {//sssssss
	key: fs.readFileSync('key.pem'),
	cert: fs.readFileSync('cert.pem')
};


// Setup and configure Express http server. Expect a subfolder called "static" to be the web root.
var httpApp = express();
httpApp.use(express.static(__dirname + "/node_modules/easyrtc/demos/"));
//httpApp.use(express.static(__dirname + "/static/"));

// Start Express http server on port 8080
var webServer = https.createServer(options, httpApp).listen(3740, function(){
  console.log("Https server listening on port " + "3740");
});
//var webServer = http.createServer(httpApp).listen(3740);

// Start Socket.io so it attaches itself to Express server
var socketServer = io.listen(webServer, {"log level":1});

// Start EasyRTC server
var rtc = easyrtc.listen(httpApp, socketServer);
