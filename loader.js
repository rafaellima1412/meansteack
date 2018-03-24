const server = require('./config/server')
require('./config/database')
//funcao e passo como parametro o server
require('./config/routes')(server)
