var http    = require('http');
var seaport = require('seaport');

var ports   = seaport.connect('localhost', 7070);
var port    = ports.register('app@0.0.1');

var server = http.createServer(function(request, response) {
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.end("Hello World from port " + port);
});

server.listen( port );

console.log('Server running on port %s', port);