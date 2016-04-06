

import {extend} from "./functions";

interface IOptions {
  protocol: string;
  host: string;
}


export default class ServerConnection {

  // Default Options
  private options = {
    protocol: "https",
    host: ""
  };

  private url = "";

  private databases = [];

  constructor(options?) {

    this.options = extend({}, this.options, options);

  }

  getDatabaseNames() {
    return this.databases;
  }

  getDatabase(name: string) {

  }
}
