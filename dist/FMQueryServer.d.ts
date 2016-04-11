export declare type TProtocol = "http" | "https";
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
    constructor(options?: IServerOptions): any;
    getDatabaseNames(): string[];
    getDatabase(name: string): void;
    getRequestUrl(): string;
    buildRequestUrl(protocol: any, host: any, username?: any, password?: any, port?: any): any;
    buildFmResultUrl(parameters: ICommandParameters): string;
    commandToParameter?(command: string, value: string | number): string;
}
export default class FMQueryServer {
    private protocol;
    private host;
    private username;
    private password;
    private requestUrl;
    private databases;
    constructor(options?: IServerOptions);
    getDatabaseNames(): any[];
    getDatabase(name: string): void;
    getRequestUrl(): string;
    private buildRequestUrl(protocol, host, username?, password?, port?);
    buildFmResultUrl(parameters: ICommandParameters): string;
    static commandToParameter(command: string, value: string | number): string;
}
