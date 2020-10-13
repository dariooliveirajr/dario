const express = require('express');
const load = require('express-load');

module.exports = function(){
    //CONFIGURAÇÃO DO EXPRESS
    const app = express();
    
    app.set('view engine','ejs');
    app.use(express.static('public'));
    load('routes').into(app);


    app.get('/teste', function (req, res) {
	res.send('Teste funcionando')
    });
    
    return app;
}
