export interface ICommandParameters {
}
export default class FMQueryServer {
    private options;
    private protocol;
    private host;
    private username;
    private password;
    private requestUrl;
    private databases;
    constructor(options?: any);
    getDatabaseNames(): any[];
    getDatabase(name: string): void;
    getRequestUrl(): string;
    private buildRequestUrl(protocol, host, username?, password?, port?);
    buildFmResultUrl(parameters: ICommandParameters): string;
    static commandToParameter(command: string, value: string | number): string;
}
