
import FMQueryServer from "./FMQueryServer";

export default class FMQueryDatabase {

    constructor(private server:FMQueryServer, private name){

    }

    public getLayoutNames(){
        const requestUrl = this.server.buildFmResultUrl({
            _db: this.name,
            _layoutnames: true
        });


    }

}