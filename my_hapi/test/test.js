/*
 * My Hapi Examples - Mocha Tests
 * Daniela Ruiz
 * daru015@gmail.com
 * Created 03/08/2015
 */

var server  = require('../index.js'),
    mocha   = require('mocha'),
    assert  = require('assert')
    http    = require('http'),
    request = require('request');

describe('server', function () {
    before(function () {
        server.startServer();
    });

    after(function () {
        server.closeServer();
    });
});

describe('/', function () {
    it('should return 404', function (done) {
        http.get('http://localhost.localdomain:8080', function (res) {
            assert.equal(404, res.statusCode);
            done();
        });
    });

    it('should say "Hello test!"', function (done) {
        http.get('http://localhost.localdomain:8080/hello/test', function (res) {
            var data = '';

            res.on('data', function (chunk) {
                data += chunk;
            });

            res.on('end', function () {
                assert.equal('{"msg":"Hello test!"}', data);
                done();
            });
        });
    });

    it('should receive a json and response a json', function (done) {
        var msg = {"name"    : "name of a service","host"    : "http://service.com","email"   : "service@service.com","message" : "this is the message"};

        request.post({url:'http://localhost.localdomain:8080/message', form: msg}, function(err,res,body) {
            /* ... */
            assert.equal('{"name":"name of a service","host":"http://service.com","email":"service@service.com","message":"this is the message"}', body);
            done();
        });



    });
});