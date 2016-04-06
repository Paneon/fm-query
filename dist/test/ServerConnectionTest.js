"use strict";
var chai = require('chai');
var ServerConnection_1 = require("../source/ServerConnection");
var expect = chai.expect;
describe('ServerConnection', function () {
    describe('#getDatabaseNames()', function () {
        before(function () {
        });
        it("should be an array", function () {
            var results = new ServerConnection_1.default();
            var dbNames = results.getDatabaseNames();
            var isArray = dbNames instanceof Array;
            var expectedType = true;
            expect(isArray).to.deep.equal(expectedType);
        });
    });
    describe("#", function () {
    });
});
