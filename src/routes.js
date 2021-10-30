const express = require('express');

const routes = express.Router();

const Usuario = require('./controllers/usuarios.controller');
const Autenticacao = require('./controllers/autenticacao.controller');
const Arquivo = require('./controllers/arquivos.controller');
const WebScrapper = require('./controllers/webscrapper.controller');

//USUÁRIOS
routes.post('/usuarios', Usuario.create);
routes.get('/usuarios', Usuario.all);

//Scrapper
routes.post('/scrapper', WebScrapper.index);

//AUTENTICACAO
routes.post('/autenticacao', Autenticacao.index);

//ARQUIVOS
routes.get('/arquivos', Arquivo.index);
routes.post('/arquivos', Arquivo.create);

module.exports = routes;