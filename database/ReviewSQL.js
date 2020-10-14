const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('reviews_service', 'root', {
  host: 'db',
  dialect: 'mysql',
});

module.exports = sequelize.define('Reviews', {
  
  sequelize,
  modelName: 'Reviews',
});
