const express = require('express');
const routes = express.Router();


const Usuario = require('./app/controllers/usuarios.controller');
const Autenticacao = require('./app/controllers/autenticacao.controller');
const Arquivo = require('./app/controllers/arquivos.controller');
const Comentario = require('./app/controllers/comentarios.controller');
const WebScrapper = require('./app/controllers/webscrapper.controller');
const Tweet = require('./app/controllers/tweet.controller');

const authMiddleware = require('./app/middlewares/auth');


// express.group("/api/", (router) => {
//   router.get("/login", loginController.store); // /api/v1/login 
// });

// routes.group(() => {
//   routes.get('/usuarios', Usuario.all);

// }).middleware([authMiddleware]);


//USUÁRIOS
routes.get('/usuarios', Usuario.all);
routes.post('/usuarios', Usuario.create);
//routes.get('/usuarios', authMiddleware, Usuario.all);

//Scrapper
routes.post('/scrapper', WebScrapper.index);

//AUTENTICACAO
routes.post('/autenticacao', Autenticacao.index);
routes.post('/esqueci_senha', Autenticacao.esqueciSenha);
routes.post('/reset_senha', Autenticacao.resetarSenha);

//ARQUIVOS
routes.get('/arquivos', authMiddleware, Arquivo.index);
routes.post('/arquivos', authMiddleware, Arquivo.create);

//TWEET
routes.get('/tweet', Tweet.index);

//COMENTARIO
routes.get('/comentario', Comentario.index);
routes.post('/comentario', Comentario.create);

module.exports = routes;