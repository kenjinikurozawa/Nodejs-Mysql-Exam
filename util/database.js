const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'hamham', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
