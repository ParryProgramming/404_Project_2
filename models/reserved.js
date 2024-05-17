// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Reserved extends Model {}

// set up fields and rules for Product model
Reserved.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    cars_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isDecimal: true,
      },
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate: {
        isNumeric: true,
      },
    },
    reserved: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    date_rented: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    date_returned: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
   
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'reserved',
  }
);

module.exports = Reserved;
