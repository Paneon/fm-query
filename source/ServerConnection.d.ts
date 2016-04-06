export default class ServerConnection {
    private options;
    private url;
    private databases;
    constructor(options?: any);
    getDatabaseNames(): any[];
    getDatabase(name: string): void;
}
