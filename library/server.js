const express = require('express');
const configs = require('../configs/server_config');


class MainServer{
    constructor(){
        this.app = express();
        this.http = require('http').Server(this.app);
        this.port = configs.port;
        this.serverInit();
    }

    serverInit(){
        this.app.set("view engine", "ejs");
    }

    async start(){
        await this.http.listen(this.port);
        return this.port;
    }
}


module.exports = MainServer;