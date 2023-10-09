const sequelize = require('../config/connection');
const categoryData = require('./category-seed');
const subcategoryData = require('./sub-category-seed');

const colorData = require('./color-seed');

const productData = require('./product-seed');

const seedAll = async () => {
  await sequelize.sync({ force:true});
  await categoryData();
  await subcategoryData();
  await colorData(); 
  await productData();

  process.exit(0);
};

seedAll();


