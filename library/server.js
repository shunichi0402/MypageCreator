const express = require('express');
const configs = require('../configs/server_config');

class MainServer{
    constructor(){
        this.app = express();
        this.http = require('http').Server(this.app);
        this.port = configs.port;
    }

    async start(){
        this.http.listen(this.port, () => {
            return this.port;
        });
    }
}


module.exports = MainServer;