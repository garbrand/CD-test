var http      = require('http');
var seaport   = require('seaport');
var pkg       = require('./package.json');

// Naming
var version   = pkg.version;
var service   = pkg.name;

process.title = service+'@'+version;

// Ports
var ports     = seaport.connect('localhost', 7070);
var port      = ports.register('app@' + version);

// Spin up the service
var server = http.createServer( function(request, response) {
	response.end("App version " + version + " from port " + port);
} );

server.listen(port);

console.log('App@%s running on port %s', version, port);