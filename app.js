#!/usr/bin/env node
require('app-module-path').addPath(__dirname + '/');

console.log ('initializing app');
var util = require('kreggel-rip/runtime/util');
var rip = require('kreggel-rip');

var serviceAPI = rip.api('service', 1);
serviceAPI.register ('/', require ('routes/welcome'));
serviceAPI.register ('/status', require ('routes/status'));
serviceAPI.register ('/localizations', require ('routes/localizations'));
serviceAPI.startup({print: true});

var authAPI = rip.api('auth', 1);
authAPI.register ('/', require ('routes/welcome'));
authAPI.register ('/status', require ('routes/status'));
authAPI.startup({print: true});

rip.defaultErrorHandler();

var port = util.normalizePort(process.env.PORT || '3000');
var app = rip.app;
app.set('port', port);

var server = app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + server.address().port);
});

server.on('error', util.onError);
server.on('listening', function () {
    var addr = server.address();
    var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    console.log('Listening on ' + bind);
});
