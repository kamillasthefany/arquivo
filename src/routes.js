const express = require('express');

const routes = express.Router();

const Usuario = require('./controllers/usuarios.controller');

// ROTAS DE USUÁRIOS
routes.post('/api/usuarios', Usuario.create);
routes.get('/api/usuarios', Usuario.all);

module.exports = routes;