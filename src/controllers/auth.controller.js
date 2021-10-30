const express = require('express');
const bcrypt = require('bcrypt');

const Usuario = require('../models/Usuario');

const router = express.Router();

router.post('/registrar', async (request, response) => {

  try {

    const { email } = request.body;
    if (await Usuario.findOne({ email }))
      return response.status(200).send({ erro: 'Usuário já existe' });

    const usuario = await Usuario.create(request.body);

    //usuario.password = undefined;
    return response.send({ usuario });

  }
  catch (error) {
    return response.status(400).send({ error: 'Falha ao registrar o usuário' });
  }
});

router.post('/autenticacao', async (request, response) => {

  try {

    const { email, senha } = request.body;
    const usuario = await Usuario.findOne({ email })

    if (!usuario)
      return response.status(400).send({ erro: 'Usuário não encontrado' });

    if (! await bcrypt.compare(senha, usuario.senha))
      return response.status(400).send({ erro: 'Senha incorreta' });


    return response.status(200).send({ usuario });

  }
  catch (error) {
    return response.status(400).send({ error: 'Falha logar' });
  }
});

module.exports = app => app.use('/autenticacao', router);