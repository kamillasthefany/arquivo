const { Model, DataTypes } = require('sequelize');

class Arquivo extends Model {
  static init(connection) {
    super.init({
      tweet: DataTypes.STRING,
      hashtags: DataTypes.STRING,
      link_da_noticia: DataTypes.STRING,
    },
      {
        sequelize: connection,
        tableName: 'arquivos',
      });

    return this;
  }
}

module.exports = Arquivo;