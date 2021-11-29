const express = require('express');
//const app = require('expre')

const routes = express.Router();

const Usuario = require('./controllers/usuarios.controller');
const Autenticacao = require('./controllers/autenticacao.controller');
const Arquivo = require('./controllers/arquivos.controller');
const Comentario = require('./controllers/comentarios.controller');
const WebScrapper = require('./controllers/webscrapper.controller');
const Tweet = require('./controllers/tweet.controller');

const authMiddleware = require('./middlewares/auth');


// express.group("/api/", (router) => {
//   router.get("/login", loginController.store); // /api/v1/login 
// });

// routes.group(() => {
//   routes.get('/usuarios', Usuario.all);

// }).middleware([authMiddleware]);


//USUÁRIOS
//routes.get('/usuarios', Usuario.all);
routes.post('/usuarios', Usuario.create);
routes.get('/usuarios', authMiddleware, Usuario.all);

//Scrapper
routes.post('/scrapper', WebScrapper.index);

//AUTENTICACAO
routes.post('/autenticacao', Autenticacao.index);

//ARQUIVOS
routes.get('/arquivos', authMiddleware, Arquivo.index);
routes.post('/arquivos', authMiddleware, Arquivo.create);

//TWEET
routes.get('/tweet', Tweet.index);

//COMENTARIO
routes.get('/comentario', Comentario.index);
routes.post('/comentario', Comentario.create);

module.exports = routes;