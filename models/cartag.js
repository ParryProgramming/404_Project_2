const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class CarTag extends Model {}

CarTag.init(
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
    cartag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'cartag',
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
    modelName: 'car_tag',
  }
);

module.exports = CarTag;
