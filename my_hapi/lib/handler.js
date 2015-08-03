/**
 * handler.js
 * Daniela Ruiz
 * daru015@gmail.com
 * Created 7/31/15.
 */
var fs = require('fs'),
    Q = require('q'),
    multiparty = require('multiparty');

/**
 *
 * @param req
 * @param res
 */
exports.hello = function (req, res){

    var user = req.params.user ? encodeURIComponent(req.params.user) : 'stranger';

    res({msg : 'Hello ' + user + '!'});

};

/**
 *
 * @param req
 * @param res
 */
exports.message = function (req, res) {

    var name    = req.payload.name,
        host    = req.payload.host,
        email   = req.payload.email,
        message = req.payload.message

    res({name : name, host : host, email : email, message : message});

};

/**
 *
 * @param req
 * @param res
 */
exports.handler = function (req, res) {
    var form = new multiparty.Form();

    form.parse(req.payload, function(err, fields, files) {
        if (err) {
            console.error(err)
            return response('Something went wrong!');                     //Handler errors http
        }else {
            upload(files, response);

        }
    });
};

exports.upload = function(files, res) {

    fs.readFile(files.file[0].path, function(err, body) {
        var fileName = files.file[0].originalFilename,
            output = config.folder + fileName;

        writeFile(body, output).then(function (message) {
            if (err) console.error(err);
            console.log(message);
            res(message);
        })

    });
};

function writeFile (body, path){                //Promise
    var deferred = Q.defer();

    fs.writeFile(path, body, function(err) {

        //if(err){return deferred.reject(new Error(err));}
        //console.log(body)
        return deferred.resolve('The process has finished\nUploaded complete!');
    });

    return deferred.promise;
}