const Server = require('./library/server');
const server = new Server();
const consola = require('./library/consola');

server.start()
.then( a => consola.success(`Server listen at port${a}...`));