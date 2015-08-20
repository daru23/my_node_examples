var http = require("http");
var url = require("url");

var router = require("./router");

function init() {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
	    console.log("Request for " + pathname + " recived.");

    router.route(pathname);

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("Hey Ya!");
    response.end();
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server Init.");
}

exports.init = init;
