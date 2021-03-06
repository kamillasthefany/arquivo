const { Sequelize } = require("sequelize");

const Usuario = require('../app/models/Usuario');
const Arquivo = require('../app/models/Arquivo');
const Comentario = require('../app/models/Comentario');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  define: {
    timestamps: true,
    underscored: true,
  },
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});

Usuario.init(sequelize);
Arquivo.init(sequelize);
Comentario.init(sequelize);

sequelize
  .authenticate()
  .then(() => console.log("Conectado com sucesso"))
  .catch((error) => console.error("Erro ao conectar: ", error));

module.exports = sequelize;