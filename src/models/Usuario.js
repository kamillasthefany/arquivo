const { Model, DataTypes } = require('sequelize');

class Usuario extends Model {
  static init(connection) {
    super.init({
      nome: DataTypes.STRING,
    },
      {
        sequelize: connection,
        tableName: 'usuarios',
      });

    return this;
  }

}

module.exports = Usuario;