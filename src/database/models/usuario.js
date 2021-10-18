const { DataTypes } = require("sequelize");

const sequelize = require("../sequelize");

const Usuario = sequelize.define("usuario", {
  nome: DataTypes.STRING
});

//Cria tabela caso não exista
const init = async () => {
  await Usuario.sync();
};

init();

module.exports = Usuario;
