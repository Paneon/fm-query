"use strict";
var FMQueryServer_1 = require("./FMQueryServer");
var FMQueryDatabase_1 = require("./FMQueryDatabase");
var FMQuery;
(function (FMQuery) {
    FMQuery.Server = FMQueryServer_1.default;
    FMQuery.Database = FMQueryDatabase_1.default;
})(FMQuery = exports.FMQuery || (exports.FMQuery = {}));
