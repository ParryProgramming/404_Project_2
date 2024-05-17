// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Rental extends Model {}

// set up fields and rules for Product model
Rental.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    car_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'cars',
        key: 'id',
        unique: false,
      },      
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id',
          unique: false,
        },      
      }, 
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'rental',
  }
);

module.exports = Rental;