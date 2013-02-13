var http    = require('http');
var seaport = require('seaport');
var version = require('./package.json').version;

var ports   = seaport.connect('localhost', 7070);
var port    = ports.register('app@' + version);

var server = http.createServer( function(request, response) {
	response.end("Hello World from port " + port);
} );

server.listen(port);

console.log('App@%s running on port %s', version, port);