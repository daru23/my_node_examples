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
    server  = new Hapi.Server();

//Server configurations
server.connection({
  port: config.server.port,
  host: config.server.host
});

//Routes
server.route(routes.routes);

//Starting Server
server.start(function (err){
  if (err) throw err;

  //console.log('Server running at:', server.info.uri);
});

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
