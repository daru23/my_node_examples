/*
 * My Hapi Examples
 * Daniela Ruiz
 * daru015@gmail.com
 * Created 03/08/2015
 */
var Code = require('code'),   // assertion library
    Lab = require('lab'),
    lab = exports.lab = Lab.script(),
    server = require('../index.js');

//variables for sugar sintax
var describe = lab.describe;
var it = lab.it;
var before = lab.before;
var after = lab.after;
var expect = Code.expect;
var suite = lab.suite;
var test = lab.test;

//BDD mode (look)
describe('math', function () {

    it('returns true when 1 + 1 equals 2', function (done) {

        expect(1+1).to.equal(2);
        done();
    });
});


//TDD mode (look)
suite('math', function () {

    test('returns true when 1 + 1 equals 2', function (done) {

        expect(1+1).to.equal(2);
        done();
    });
});
