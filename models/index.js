const Cars = require('./cars.js');
const User = require('./User.js');
const Rental = require('./carRental.js')
// Define the associations

Cars.belongsToMany(User, {
  through: Rental,
  foreignKey: 'car_id', 
  onDelete: 'CASCADE',
});
User.belongsToMany(Cars, {
  through: Rental,
  foreignKey: 'user_id', 
  onDelete: 'CASCADE',
});
User.hasMany(Rental, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});
module.exports = {
  Cars,
  User,
  Rental,
};