const app = require('./config/config.js')();
const http = require('http');
const server = http.createServer(app);

server.listen(21183,function(){
   console.log('Servidor iniciado com sucesso'); 
});
