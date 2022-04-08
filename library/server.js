const express = require('express');
const configs = require('../configs/server_config');
const path = require('path');
const mainPath = path.dirname(__dirname);

class MainServer{
    constructor(){
        this.app = express();
        this.http = require('http').Server(this.app);
        this.port = configs.port;
        this.serverInit();
        this.rooting();
    }

    serverInit(){
        this.app.set("view engine", "ejs");
    }

    rooting(){
        // === TODO ===
        // Add randering pages rooting

        // static asset
        this.app.use(express.static(path.join(mainPath, 'static')));

        // 404 page
        this.app.use((res, req) => {
            res.status(404).render(path.join(mainPath, 'page', 'notfound'), {})
        });
    }

    async start(){
        await this.http.listen(this.port);
        return this.port;
    }
}


module.exports = MainServer;