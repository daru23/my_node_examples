/**
 * routes.js
 * Daniela Ruiz
 * daru015@gmail.com
 * Created 7/31/15.
 */

var handler = require('./handler.js'),
    Joi     = require('joi');

exports.routes = [
    {   method   : 'GET',
        path     : '/hello/{user?}',
        config   : {
            handler  : handler.hello,
            validate: {
                params: {user: Joi.string()}
            }
        }
    },
    {   method   : 'POST',
        path     : '/message',
        config   : {
            handler  : handler.message,
            validate: {
                payload : Joi.object().length(4).keys({
                                name    : Joi.string(),
                                host    : Joi.string(),
                                email   : Joi.string().email(),
                                message : Joi.string()
                })
            }
        }

    },
    {
        method  : 'GET',
        path    : '/streaming',
        handler : { file: "html/index.html" }

    },
    {
        path: "/{static*}",
        method: "GET",
        handler: {
            directory: {
                path: "./http"
            }
        }
    },
    {
        method   : 'GET',
        path   : '/upload',
        handler : {
            file: 'html/upload.html'
        }
    },
    {
        method : 'POST',
        path   : '/upload',
        config : {

            payload: {          // This configuration avoid to put file in memory but stream
                maxBytes: 209715200,
                output: 'stream',
                parse: false
            },
            handler : handler.upload
        }
    }
];

