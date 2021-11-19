const Comentario = require('../models/Comentario');

const Comentarios = {

  async index(request, response, next) {
    try {
      const comentarios = await Comentario.findAll();
      return response.status(201).json(comentarios);
    }
    catch (error) {
      console.log('error', error);
      return response.status(500).json(error);
    }
  },
  async create(request, response, next) {

    try {
      const { comentario } = request.body;
      const newComent = { comentario: comentario };
      console.log('comentario', newComent);
      const result = await Comentario.create({ comentario, usuario_id: 1 });
      return response.status(201).json(result);
    }
    catch (error) {
      console.log('error', error);
      return response.status(500).json(error);
    }

  },
};

module.exports = Comentarios;