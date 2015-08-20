var exec = require("child_process").exec;
var querystring = require("querystring");

function init(response, postData) {
  console.log("The handle init was call.");
  
  var body = '<html>'+'<head>'+'<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />'+'</head>'+ '<body>'+'<form action="/up" method="post">'+'<textarea name="text" rows="20" cols="60"></textarea>'+'<input type="submit" value="Enviar texto" />'+'</form>'+'</body>'+'</html>';

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}

function up(response, data) {
  console.log("The handle up was call.");
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("Tu enviaste el texto: " +querystring.parse(data)["text"]);
  response.end();
}

exports.init = init;
exports.up = up; 

//test
