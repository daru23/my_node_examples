/*
 * xml-to-json tests
 *
 * Daniela Ruiz
 * 21/07/2015
 */

var xml2js      = require('xml2js'),
    MongoClient = require('mongodb').MongoClient,
    readable    = process.stdin ;

/* DB Connection */
var saveJSON = function (json, callback){
   MongoClient.connect('mongodb://localhost:27017/exactTestDB', function(err, db) {
      if(err) console.log(err);

      var collection = db.collection('xml2jsonTest');
      
      collection.insertOne(json, function (err) {
         if (err) callback(err);
         callback('Message was store');
      });
   });
};

/* Process */
readable.on('data', function(data, error){
   if (error) console.log(error);

   xml2js.parseString(data, function (err, result) {
      //Replace $ with 'lambda'
      var jsonString = JSON.stringify(result);
      var cleanjsonString = jsonString.replace(/\$/g, "lambda");

      console.log(cleanjsonString);

      saveJSON(JSON.parse(cleanjsonString), function(message, error){
         if (error) console.log(error);

         console.log(message);
      })
      //console.dir(result);
   });
})
