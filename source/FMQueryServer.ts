import {extend} from "./functions";

interface IOptions {
    protocol: TProtocol;
    host: string;
}

export interface ICommandParameters {

}

const Commands = {};

type TProtocol = "http" | "https";

export default class FMQueryServer {

    // Default Options
    private options = {
        protocol: <TProtocol>"https",
        host: "",
        username: "",
        password: "",
        port: 0,
    };

    private protocol:TProtocol;
    private host:string;

    private username: string;
    private password: string;

    private requestUrl = "";

    private databases = [];

    constructor(options?) {

        this.options = extend({}, this.options, options);

        this.protocol = this.options.protocol;
        this.host = (this.options.port > 0) ? this.options.host+":"+this.options.port : this.options.host;

        this.username = this.options.username;
        this.password = this.options.password;

        this.requestUrl = this.buildRequestUrl(this.protocol, this.host, this.username, this.password)

    }

    getDatabaseNames() {

        const requestUrl = this.buildFmResultUrl({
            _dbnames: true
        });

        return this.databases;
    }

    getDatabase(name:string) {

    }

    public getRequestUrl(){
        return this.requestUrl;
    }

    private buildRequestUrl(protocol: TProtocol, host:string, username?:string, password?:string, port?:number) {

        let authentication = "";

        if (username && password) {
            authentication = username + ":" + password + "@";
        }

        if(port){
            host += ":"+port;
        }

        return protocol + "://" + authentication + host;
    }

    public buildFmResultUrl(parameters: ICommandParameters) {
        const commandArray = Object.keys(parameters).map( param => {
            return FMQueryServer.commandToParameter(param, parameters[param]);
        });

        return this.requestUrl + "/fmi/xml/fmresultset.xml?" + commandArray.join("&");
    }

    static commandToParameter(command: string, value: string | number){
        if(command.indexOf("_") === 0){
            command = "-"+command.substr(1);
        }

        switch(command){
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
                return command+"="+value;
        }
    }


}
