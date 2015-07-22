var http = require("http");
var url = require("url");


function init(route, handle) {
  function onRequest(request, response) {
    var data = '';
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " recived.");

    request.setEncoding("utf8");

    request.addListener("data", function(trozoPosteado) {
    
        data += trozoPosteado;
        console.log("Recibido trozo POST '" + trozoPosteado + "'.");
      });
    request.addListener("end", function() {
      route(handle, pathname, response, data);
    });
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server Init.");
}

exports.init = init;
