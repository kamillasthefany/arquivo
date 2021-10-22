const express = require('express');

const routes = express.Router();

const Usuario = require('./controllers/usuarios.controller');
const WebScrapper = require('./controllers/webscrapper.controller');

//USUÁRIOS
routes.post('/usuarios', Usuario.create);
routes.get('/usuarios', Usuario.all);

//Scrapper
routes.post('/scrapper', WebScrapper.index);

//AUTENTICACAO
routes.post('/autenticacao', async (request, response) => {
  const { email, senha } = request.body;
});

module.exports = routes;