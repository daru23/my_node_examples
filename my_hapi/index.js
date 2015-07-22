/* 
 * My Hapi Examples 
 * Daniela Ruiz
 * daru015@gmail.com
 * 21/07/2015
 */

var Hapi = require('hapi'),
    Path = require('path'),
    server = new Hapi.Server();

//Server configurations
server.connection({
  port: 3000,
  host: 'localhost.localdomain'
});

//Routes
var routes = [
   { method   : 'GET', 
     path     : '/hello/{user?}', 
     validate : { path : { user: Hapi.types.String() }}
     handler  : hello
   }
];

function hello (request, reply){
  var user = request.params.user ? encodeURIComponent(request.params.user) : 'stranger';
  reply({msg : 'Hello ' + user + '!'});
}

//server.route({
//  method: 'GET',
//  path: '/{param*}',
//  handler: {
//        file: {
//            path: 'meme5.jpg',
//            filename: 'picture.jpg',   // override the filename in the Content-Disposition header
//            mode: 'attachment',        // specify the Content-Disposition is an attachment
//            lookupCompressed: true     // allow looking for script.js.gz if the request allows it
//        }
//  }
//})

server.route(routes);

//Starting Server
server.start(function (err){
  if (err) throw err;
  console.log('My Hapi Server is runing on port 3000');
});
