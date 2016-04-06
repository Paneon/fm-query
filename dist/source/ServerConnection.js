"use strict";
var ServerConnection = (function () {
    function ServerConnection(options) {
        this.options = {
            protocol: "https",
            host: ""
        };
        this.url = "";
        this.databases = [];
    }
    ServerConnection.prototype.getDatabaseNames = function () {
        return this.databases;
    };
    ServerConnection.prototype.getDatabase = function (name) {
    };
    return ServerConnection;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ServerConnection;
