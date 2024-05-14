const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Makes extends Model {}

Makes.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    makes_name: {
      type: DataTypes.STRING,
      allowNull: false,        
    },
    car_id: {
      type:DataTypes.INTEGER,
      allowNull: false,
      through: {
        model: "cars",
        key: "id"
      },
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'makes',
  }
);

module.exports = Makes;
