const server = require('./library/server');
const consola = require

server.start()
    .then( port => consola.success(`Server listen at port${port}...`))
    .catch(err => consola.error(err));