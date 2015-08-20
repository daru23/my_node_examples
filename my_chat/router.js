function route(handle, pathname, response, postData) {
  console.log("I am going to make a route " + pathname);
  if (typeof handle[pathname] === 'function') {
    handle[pathname](response, postData);
  } else {
    console.log("There is no way to handle " + pathname);
    response.writeHead(404, {"Content-Type": "text/html"});
    response.write("404 Ups! No one is home!");
    response.end();
  }
}

exports.route = route;
