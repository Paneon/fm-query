"use strict";
var functions_1 = require("./functions");
var Commands = {};
var FMQueryServer = (function () {
    function FMQueryServer(options) {
        this.options = {
            protocol: "https",
            host: "",
            username: "",
            password: "",
            port: 0,
        };
        this.requestUrl = "";
        this.databases = [];
        this.options = functions_1.extend({}, this.options, options);
        this.protocol = this.options.protocol;
        this.host = (this.options.port > 0) ? this.options.host + ":" + this.options.port : this.options.host;
        this.username = this.options.username;
        this.password = this.options.password;
        this.requestUrl = this.buildRequestUrl(this.protocol, this.host, this.username, this.password);
    }
    FMQueryServer.prototype.getDatabaseNames = function () {
        var requestUrl = this.buildFmResultUrl({
            _dbnames: true
        });
        return this.databases;
    };
    FMQueryServer.prototype.getDatabase = function (name) {
    };
    FMQueryServer.prototype.getRequestUrl = function () {
        return this.requestUrl;
    };
    FMQueryServer.prototype.buildRequestUrl = function (protocol, host, username, password, port) {
        var authentication = "";
        if (username && password) {
            authentication = username + ":" + password + "@";
        }
        if (port) {
            host += ":" + port;
        }
        return protocol + "://" + authentication + host;
    };
    FMQueryServer.prototype.buildFmResultUrl = function (parameters) {
        var commandArray = Object.keys(parameters).map(function (param) {
            return FMQueryServer.commandToParameter(param, parameters[param]);
        });
        return this.requestUrl + "/fmi/xml/fmresultset.xml?" + commandArray.join("&");
    };
    FMQueryServer.commandToParameter = function (command, value) {
        if (command.indexOf("_") === 0) {
            command = "-" + command.substr(1);
        }
        switch (command) {
            case "-dbnames":
            case "-find":
            case "-findall":
            case "-findany":
            case "-layoutnames":
            case "-new":
            case "-scriptnames":
            case "-view":
                return command;
            default:
                return command + "=" + value;
        }
    };
    return FMQueryServer;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = FMQueryServer;
