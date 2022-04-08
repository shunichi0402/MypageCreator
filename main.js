const Server = require('./library/server');
const server = new Server();
const consola = require('./library/consola');

server.start()
.then( port => consola.success(`Server listen at port${port}...`));