/*
var http    = require("http");
var express = require("express");

var httpApp = express();
httpApp.use(express.static(__dirname));

var webServer = http.createServer(httpApp).listen(8080);
*/


var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname));

app.get('/', function(request, response) {
  response.render('index');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


