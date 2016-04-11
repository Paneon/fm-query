"use strict";

const chai = require("chai");

const FMQueryServer = require("../dist/FMQueryServer").default;

const expect = chai.expect;

const testServerOptions = {
    host: "127.0.0.1",
    protocol: "http"
};

describe("FMQueryServer", function () {

    describe(".getDatabaseNames()", function () {

        it("should return an array", function () {
            let results = new FMQueryServer();

            let dbNames = results.getDatabaseNames();

            expect(dbNames).to.be.an("array");
        });


    });

    describe(".commandToParameter()", function () {
        it("should replace underscores on the first character of the command with a dash", function () {

            const actual = FMQueryServer.commandToParameter("_dbnames", true);
            const expected = "-dbnames";

            expect(actual).to.equal(expected);
        });

        it("should not replace underscores that are not on the first character", function () {
            const actual = FMQueryServer.commandToParameter("some_field_name", "Value");
            const expected = "some_field_name=Value";

            expect(actual).to.equal(expected);
        });

        it("should not replace underscores that are not on the first character", function () {
            const actual = FMQueryServer.commandToParameter("some_field_name", "Value");
            const expected = "some_field_name=Value";

            expect(actual).to.equal(expected);
        });
    });

    describe(".buildFmResultUrl()", function () {
        it("should return the correct URL to list layout names.", function () {

            let server = new FMQueryServer(testServerOptions);

            const actualUrl = server.buildFmResultUrl({_dbnames: true});
            const expectedUrl = "http://127.0.0.1/fmi/xml/fmresultset.xml?-dbnames";

            expect(actualUrl).to.equal(expectedUrl);
        });
    });

});
