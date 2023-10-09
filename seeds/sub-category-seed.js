const { SubCategory } = require('../models');

const subcategoryData = [
  {
    sub_category_name: 'Blazers',
    slug: 'blazers',
    category_id: 1
  },
  {
    
    sub_category_name: 'Jackets',
    slug: 'mens_jackets',
    category_id: 1
  },
  {
    sub_category_name: 'Pants',
    slug: 'mens_pants',
    category_id: 1
  },
  {
    sub_category_name: 'Tops',
    slug: 'mens_tops',
    category_id: 1
  },
  {
    sub_category_name: 'Dresses',
    slug: 'dresses',
    category_id: 2
  },
  {
    sub_category_name: 'Jackets',
    slug: 'womens_jackets',
    category_id: 2
  },
  {
    sub_category_name: 'Pants',
    slug: 'womens_pants',
    category_id: 2
  },
  {
    sub_category_name: 'Skirts',
    slug: 'skirts',
    category_id: 2
  },
  {
    sub_category_name: 'Tops',
    slug: 'womens_tops',
    category_id: 2
  },
  {
    sub_category_name: 'Glasses',
    slug: 'glasses',
    category_id: 3
  },
  {
    sub_category_name: 'Headware',
    slug: 'headware',
    category_id: 3
  },
  {
    sub_category_name: 'Shoes',
    slug: 'Shoes',
    category_id: 3
  },
  {
    sub_category_name: 'Watches',
    slug: 'watches',
    category_id: 3
  },

];

const seedsubcategories = () => SubCategory.bulkCreate(subcategoryData);

module.exports = seedsubcategories;
