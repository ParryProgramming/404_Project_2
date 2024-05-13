// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Cars extends Model {}

// set up fields and rules for Product model
Cars.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    car_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    makes_name: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: 'makes',
            key: 'id',
            unique: false,
        },
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
    car_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'makes',
        key: 'id',
        unique: false,
      },      
    }, 
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'cars',
  }
);

module.exports = Cars;
