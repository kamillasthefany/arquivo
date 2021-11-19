const { Model, DataTypes } = require('sequelize');

class Comentario extends Model {
  static init(connection) {
    super.init({
      comentario: DataTypes.STRING,
      usuario_id: DataTypes.INTEGER,
    },
      {
        sequelize: connection,
        tableName: 'comentarios',
      });

    return this;
  }
}

module.exports = Comentario;