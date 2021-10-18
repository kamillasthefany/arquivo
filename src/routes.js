const express = require('express');

const routes = express.Router();

const Usuario = require('./controllers/usuarios.controller');
const WebScrapper = require('./controllers/webscrapper.controller');

//USUÁRIOS
routes.post('/api/usuarios', Usuario.create);
routes.get('/api/usuarios', Usuario.all);

//Scrapper
routes.post('/scrapper', WebScrapper.index);

module.exports = routes;