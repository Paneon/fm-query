"use strict";
var FMQueryDatabase = (function () {
    function FMQueryDatabase(server, name) {
        this.server = server;
        this.name = name;
    }
    FMQueryDatabase.prototype.getLayoutNames = function () {
        var requestUrl = this.server.buildFmResultUrl({
            _db: this.name,
            _layoutnames: true
        });
    };
    return FMQueryDatabase;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = FMQueryDatabase;
