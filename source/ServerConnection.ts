

//import {extend} from "./functions";

interface IOptions {
  protocol:string;
  host:string;
}


export default class ServerConnection {

  // Default Options
  private options = {
    protocol: "https",
    host:""
  };

  private url = "";

  private databases = [];

  constructor(options?){

    //this.options = Object.keys(this.options).map( key => { return options[key] || this.options[key]; });


  }

  getDatabaseNames(){
    return this.databases;
  }

  getDatabase(name:string){

  }
}
