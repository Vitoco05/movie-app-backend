const sequelize = require('../utils/connection.js');
const { DataTypes } = require('sequelize');

const Actor = sequelize.define('actor', {
   
  firstName: {
    type: DataTypes.STRING(30),
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING(30),
    allowNull: false
  },
  nationality: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  image: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  birthday: {
    type: DataTypes.DATEONLY,
    allowNull: false
  }

});

module.exports = Actor;