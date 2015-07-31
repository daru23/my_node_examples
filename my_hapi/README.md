#my_hapi

Small HTTP aplication using Hapi.js and Joi.js
Examples to demostrated how to use this modules together

#GET Request 
```
curl -XGET http://localhost:8080/hello/name
curl -XGET http://localhost:8080/hello/
```

#POST Reques
```
curl -XPOST http://localhost.localdomain:8080/message \
     -H 'Content-Type: application/json' \
     -d '{ "name" : ",my service", "host" : "https://www.npmjs.com/package/joi#stringhostname", "email" : "daniela@myservice.com", "message" : "this is a message" }'
```
#POST Request JSON Example
```json
{
  "name"    : "name of a service",
  "host"    : "http://service.com",
  "email"   : "service@service.com",
  "message" : "this is the message"
}
```

#To Do
Handler static files
Upload files
