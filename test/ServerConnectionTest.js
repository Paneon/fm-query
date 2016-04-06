"use strict";

const chai = require("chai");

const ServerConnection = require("../dist/ServerConnection").default;

const expect = chai.expect;

describe("ServerConnection", () => {

  describe(".getDatabaseNames()", () => {

    before(function () {
    });

    it("should return an array", () => {
      let results = new ServerConnection();

      let dbNames = results.getDatabaseNames();

      let isArray = dbNames instanceof Array;

      expect(isArray).to.deep.equal(true);
    });

    it("should return an array of Strings", () => { });

  });

});
