// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');
const { belongsTo } = require('./Category');

// Products belongsTo Category
Product.belongsTo(Category,{
  foreignKey: 'category_id',
})

// Categories have many Products

Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
})

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag,{
  foreignKey: 'product_id',
})

Tag.belongsToMany(product,{
  foreignKey: 'tag_id',
})
// Tags belongToMany Products (through ProductTag)

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
