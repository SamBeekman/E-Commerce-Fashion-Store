const router = require('express').Router();
const Category = require('../models/category');
const SubCategory = require('../models/subCategory');
const Product = require('../models/product');
const Color = require('../models/color');
const slugify = require('slugify')


// route to get all categories
// header
router.get('/', async (req, res) => {


  const category = await Category.findAll({
    include: [
      {
        model: SubCategory,
        attributes: ['sub_category_name', 'slug', 'category_id'],
      },
    ],
  });

  const catData = category.map((catItem) =>
    catItem.get({ plain: true })
  );

  const productData = await Product.findAll({
    include: [
      {
        model: Color,
        attributes: ['color_name'],
      },
    ],
  }).catch((err) => {
    res.json(err);
  });
  const productList = productData.map((item) => item.get({ plain: true }));

  res.render('product', {
    productList,
    catData,
    loggedIn: req.session.loggedIn,
  });
});


router.get('/:slug', async (req, res) => {

  let cartTotal = req.session.cart ?? []

  try {
    const pData = await Product.findOne({
      where: {
        slug: req.params.slug
      },
      include: [
        {
          model: Color,
          attributes: ['color_name'],
        },
      ],
    });

    if (!pData) {
      res.status(404).json({ message: 'No product with this id!' });
      return;
    }

    const productData = pData.get({ plain: true });

    console.log(productData)
    res.render('product-details', { productData, cartTotal: cartTotal.length, loggedIn: req.session.loggedIn });
  } catch (err) {
    res.status(500).json(err);
  };
});


module.exports = router;
