/**
 * handler.js
 * Daniela Ruiz
 * daru015@gmail.com
 * Created 7/31/15.
 */

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
exports.socket = function (req, res) {

};