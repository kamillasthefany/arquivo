const Usuario = require('../models/Usuario');

const Usuarios = {
    all(req, res, next) {
        Usuario.findAll().then((result) => {
            res.json(result);
        })
            .catch(next);
    },

    async create(request, response, next) {

        try {
            const { nome } = request.body;
            console.log('nome', nome);
            const usuario = await Usuario.create(nome);
            console.log('resposta', usuario);
            return response.status(201).json(usuario);
        }
        catch (error) {
            console.log('error', error);
            return response.status(500).json(error);
        }

    },
};

module.exports = Usuarios;