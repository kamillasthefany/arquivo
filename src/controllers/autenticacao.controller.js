const Usuario = require('../models/Usuario');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require("dotenv").config();

const Autenticacao = {

  async index(request, response, next) {

    try {
      const { email, senha } = request.body;
      const usuario = await Usuario.findOne({ where: { email } });

      if (!usuario)
        return response.status(400).send({ erro: 'Usuário não encontrado' });

      const resultado = await bcrypt.compare(senha, usuario.senha);

      if (!resultado)
        return response.status(400).send({ erro: 'Senha incorreta' });

      const token = jwt.sign({ id: usuario.id }, process.env.SECRET, {
        expiresIn: 86400,
      });

      return response.status(200).send({ usuario, token });
    }
    catch (error) {
      console.log('error', error);
      return response.status(500).json(error);
    }

  },
};

module.exports = Autenticacao;