const Sequelize = require('sequelize');

exports.getModel = db => {
  return db.define(
    'book',
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      author: Sequelize.STRING,
      publisher: Sequelize.STRING,
      price: Sequelize.INTEGER,
      link: Sequelize.STRING,
      year: Sequelize.INTEGER
    },
    {
      freezeTableName: true,
      paranoid: true,
      underscored: true
    }
  );
};
