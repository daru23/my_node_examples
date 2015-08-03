/* 
 * My Hapi Examples 
 * Daniela Ruiz
 * daru015@gmail.com
 * Created 21/07/2015
 */

var Hapi    = require('hapi'),
    Path    = require('path'),
    Good    = require('good'),
    config  = require('./config.json'),
    routes  = require('./lib/routes'),
    socket  = require('./lib/socket'),
    server  = new Hapi.Server();

//Server configurations
server.connection({
  port: config.server.port,
  host: config.server.host
});

//Routes
server.route(routes.routes);

//Registering modules for console output
server.register({
    register: Good,
    options: {
        reporters: [{
            reporter: require('good-console'),
            events: {
                response: '*',
                log: '*'
            }
        }]
    }
}, function (err) {
    if (err) {
        throw err;
    }
    server.start(function () {
        server.log('info', 'Server running at: ' + server.info.uri);
    });
});

//Socket.io
var io = require('socket.io')(server.listener);

io.on('connection', function(socket){
    socket.on('chat message', function(msg){
        io.emit('chat message', msg);
    });
});

//Starting Server - export function
exports.startServer = function() {
    server.start(function (err) {
        if (err) throw err;
        //console.log('Server running at:', server.info.uri);
    });
};

//Close Server - export function
exports.closeServer = function () {
   server.stop(function () {
       server.log('info', 'Server stop. Bye! ');
   })
};

this.startServer();
//this.closeServer();