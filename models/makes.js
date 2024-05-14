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
