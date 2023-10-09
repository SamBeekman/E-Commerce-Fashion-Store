const router = require('express').Router();
const Category = require('../models/category');
const SubCategory = require('../models/subCategory');
const Product = require('../models/product');
const Color = require('../models/color');
const slugify = require('slugify')


// route to get all categories

router.get('/:slug', async (req, res) => {
console.log(req.params)
  const category = await Category.findAll();
  const catData = category.map((catItem) =>
    catItem.get({ plain: true })
  );

  const currentCategory = await Category.findOne({
    where: {
     slug: req.params.slug 
    },
    include: [
      {
        model: SubCategory,
        attributes: ['id', 'sub_category_name', 'slug', 'category_id'],
      },
    ],
  });


  const cuatData = currentCategory.get({ plain: true });
  
  let finalsubCatId = cuatData.subCategories.map((v) => v.id)

  const currentproductData = await Product.findAll()

    .catch((err) => {
      res.json(err);
    });
  const productList = currentproductData.map((item) => item.get({ plain: true }));

  let finalProductLists = productList.filter((v) => {
    if (finalsubCatId.includes(v.sub_category_id)) {
      return v
    }
  })

  let cartTotal = req.session.cart ?? []

  res.render('category-filter', { cuatData, catData, finalsubCatId, finalProductLists, cartTotal: cartTotal.length, loggedIn: req.session.loggedIn });
});


//side bar
router.get('/sub-category/:slug/:sslug', async (req, res) => {

  const category = await Category.findAll();
  const catData = category.map((catItem) =>
    catItem.get({ plain: true })
  );

  const currentCategory = await Category.findOne({
    where: {
      slug: req.params.slug
    },
    include: [
      {
        model: SubCategory,
        attributes: ['id', 'sub_category_name', 'slug', 'category_id'],
      },
    ],
  });

  const cuatData = currentCategory.get({ plain: true });

  const currentsubCategory = await SubCategory.findOne({
    where: {
      slug: req.params.sslug
    },
    include: [
      {
        model: Product,
        attributes: ['id', 'product_name', 'product_image_path', 'slug', 'price'],
      },
    ],
  });

  const pData = currentsubCategory.get({ plain: true });

  pData.products.map(element => {
    element.product_image_path = element.product_image_path.slice(2);
    console.log(element);
  });

  let cartTotal = req.session.cart ?? []

  res.render('category-filter', { catData, cuatData, finalProductLists: pData.products, cartTotal: cartTotal.length, loggedIn: req.session.loggedIn, });
})

module.exports = router;
