const Arquivo = require('../models/Arquivo');

const Arquivos = {
  index(request, response, next) {
    Arquivo.findAll().then((result) => {
      response.json(result);
    })
      .catch(next);
  },

  async create(request, response, next) {

    try {
      const { tweet, hashtags, linkDaNoticia } = request.body;
      const arquivo = await Arquivo.create({ tweet, hashtags, link_da_noticia: linkDaNoticia });
      return response.status(201).json(arquivo);
    }
    catch (error) {
      console.log('error', error);
      return response.status(500).json(error);
    }

  },
};

module.exports = Arquivos;