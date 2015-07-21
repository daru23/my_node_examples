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
  host: 'localhost.localdomain',
  labels: ['web'],
  routes: {
     files: {
       relativeTo: Path.join(__dirname, 'public')
     }
  }
});

//Routes
server.route({
  method: 'GET',
  path: '/{param*}',
  handler: {
        file: {
            path: 'meme5.jpg',
            filename: 'picture.jpg',   // override the filename in the Content-Disposition header
            mode: 'attachment',        // specify the Content-Disposition is an attachment
            lookupCompressed: true     // allow looking for script.js.gz if the request allows it
        }
  }
})

server.route({
  method: 'GET',
  path: '/hello/{user?}',
  handler: function (request, reply) {
    var user = request.params.user ? encodeURIComponent(request.params.user) : 'stranger';
    reply('Hello ' + user + '!');
  },
  config:{
    description: 'Say hellp!',
    notes : 'The user parameter defaults to \'stranger\' if unspecified',
    tags : ['api', 'greeting']
  }
  
})


//Starting Server
server.start(function (err){
  if (err) throw err;
  console.log('My Hapi Server is runing on port 3000');
});
