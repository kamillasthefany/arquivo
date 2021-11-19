const Comentario = require('../models/Comentario');

const Comentarios = {
  index(request, response, next) {
    Comentario.findAll().then((result) => {
      res.json(result);
    })
      .catch(next);
  },

  async create(request, response, next) {

    try {
      const { comentario } = request.body;
      const newComent = { comentario: comentario, usuario_id: 1 };
      console.log('comentario', newComent);
      const result = await Comentario.create(newComent);
      return response.status(201).json(result);
    }
    catch (error) {
      console.log('error', error);
      return response.status(500).json(error);
    }

  },
};

module.exports = Comentarios;