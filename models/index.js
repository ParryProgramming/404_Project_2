// import models
const Cars = require('./cars');
const Makes = require('./makes');
const Car = require('./cartag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});
// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
  as: 'products'
})
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    foreignKey: 'product_id',
    unique: false
  }
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id',
  unique: false
});
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
