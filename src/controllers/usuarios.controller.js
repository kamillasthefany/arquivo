const Usuario = require('../database/models/usuario');

const Usuarios = {
    all(req, res, next) {
        Usuario.findAll().then((result) => {
            res.json(result);
        })
            .catch(next);
    },

    create(req, res, next) {
        const { nome } = req.body;

        Usuario.create({
            nome,
        })
            .then((result) => {
                res.status(201).json(result); //return with ID -> 201 (CREATED)
            })
            .catch(next);
    },
};

module.exports = Usuarios;