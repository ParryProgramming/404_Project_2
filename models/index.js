// import models
const Cars = require('./cars');
const Makes = require('./makes');
const CarTag = require('./cartag');
const User = require('./User');
const ProductTag = require('./ProductTag');


Cars.belongsTo(Makes, {
  foreignKey: 'category_id',
});

Makes.hasMany(Cars, {
  foreignKey: 'category_id',
  as: 'products'
})

User.hasMany(Cars, {
  through: Cars,
  model: "cars",
  foreignKey: 'id',
  unique: false
});
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
