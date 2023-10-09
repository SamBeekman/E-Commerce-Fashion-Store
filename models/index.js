
const Category = require('./category')
const SubCategory = require('./subCategory')
const Product = require('./product')
const Color = require('./color')
const User = require('./User');
const UserProduct = require('./user_products')


SubCategory.belongsTo(Category, {
    foreignKey: 'category_id',
});

Category.hasMany(SubCategory, {
    foreignKey: 'category_id',
    onDelete: 'CASCADE',
});

Product.belongsTo(SubCategory, {
    foreignKey: 'sub_category_id',
});

SubCategory.hasMany(Product, {
    foreignKey: 'sub_category_id',
    onDelete: 'CASCADE',
});

Product.belongsTo(Color, {
    foreignKey: 'color_id',
})
Color.hasMany(Product, {
    foreignKey: 'color_id',
    onDelete: 'CASCADE',
});
UserProduct.belongsTo(Product, {
    foreignKey: 'product_id',
})
UserProduct.belongsTo(User, {
    foreignKey: 'user_id',
})

module.exports = { Category, SubCategory, Color, Product, UserProduct, User };
