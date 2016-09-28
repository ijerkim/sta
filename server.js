var http    = require("http");
var express = require("express");

var httpApp = express();
httpApp.use(express.static(__dirname));

var webServer = http.createServer(httpApp).listen(8080);
