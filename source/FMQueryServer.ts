import {extend} from "./functions";

const Commands = {};

export type TProtocol = "http" | "https";

export interface ICommandParameters {

}

export interface IServerOptions {
    protocol?: TProtocol;
    host?: string;
    username?: string;
    password?: string;
    port?: number;
}

export interface IFMQueryServer {
    protocol: string;
    host: string;
    username: string;
    password: string;
    requestUrl: string;
    databases: string[];
    constructor(options?: IServerOptions);
    getDatabaseNames(): string[];
    getDatabase(name: string): void;
    getRequestUrl(): string;
    buildRequestUrl(protocol, host, username?, password?, port?);
    buildFmResultUrl(parameters: ICommandParameters): string;

    commandToParameter?(command: string, value: string | number): string;
}

export default class FMQueryServer {

    private protocol: TProtocol;
    private host: string;

    private username: string;
    private password: string;

    private requestUrl = "";

    private databases = [];

    constructor(options?: IServerOptions) {

        const defaultOptions = {
            protocol: <TProtocol>"https",
            host: "",
            username: "",
            password: "",
            port: 0,
        };

        options = extend(defaultOptions, options);

        this.protocol = options.protocol;
        this.host = (options.port > 0) ? options.host + ":" + options.port : options.host;

        this.username = options.username;
        this.password = options.password;

        this.requestUrl = this.buildRequestUrl(this.protocol, this.host, this.username, this.password);

    }

    getDatabaseNames() {

        const requestUrl = this.buildFmResultUrl({
            _dbnames: true
        });

        return this.databases;
    }

    getDatabase(name: string) {

    }

    public getRequestUrl() {
        return this.requestUrl;
    }

    private buildRequestUrl(protocol: TProtocol, host: string, username?: string, password?: string, port?: number) {

        let authentication = "";

        if (username && password) {
            authentication = username + ":" + password + "@";
        }

        if (port) {
            host += ":" + port;
        }

        return protocol + "://" + authentication + host;
    }

    public buildFmResultUrl(parameters: ICommandParameters) {
        const commandArray = Object.keys(parameters).map(param => {
            return FMQueryServer.commandToParameter(param, parameters[param]);
        });

        return this.requestUrl + "/fmi/xml/fmresultset.xml?" + commandArray.join("&");
    }

    static commandToParameter(command: string, value: string | number) {
        if (command.indexOf("_") === 0) {
            command = "-" + command.substr(1);
        }

        switch (command) {
            // Special cases that don't have a value
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
    }


}
