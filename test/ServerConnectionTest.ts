/// <reference path="../typings/main.d.ts" />

import chai = require('chai');
import ServerConnection from "../source/ServerConnection";

var expect = chai.expect;

describe('ServerConnection', () => {
  describe('#getDatabaseNames()', () => {

    before(() => {
    });

    it("should be an array", () => {

      let results = new ServerConnection();
      let dbNames = results.getDatabaseNames();

      let isArray = dbNames instanceof Array;
      let expectedType = true;
      expect(isArray).to.deep.equal(expectedType);
    });
  });

  describe("#", () => {

  });
});
