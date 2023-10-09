const router = require('express').Router();
const Product = require('../models/product');


router.get('/add-to-cart/:pid?', async (req, res) => {

  const pData = await Product.findOne({
    where: {
      id: req.params.pid
    }
  });

  const productData = pData.get({ plain: true });

  let cart = req.session.cart ?? []
  let checkStatus = 0;
  cart.forEach(element => {
    if (element.pid == req.params.pid) {
      checkStatus = 1;
    }
  });

  let finalCart;
  if (checkStatus == 0) {
    finalCart = [...cart, {
      'pid': req.params.pid,
      'qty': 1,
      'price': productData.price,
      'productNamme': productData.product_name,
      'productImage': productData.product_image_path,
    }]

  }
  else {
    finalCart = cart.filter((v, i) => {
      if (v.pid == req.params.pid) {
        v['qty'] = v['qty'] + 1
      }
      return v;
    })
  }

  req.session.cart = finalCart
 
  res.redirect('/cart')
});


// cart length
router.get('/', async (req, res) => {
  let cartTotal = req.session.cart ?? []
  let finalcart = req.session.cart ?? []
  res.render('cart', { 'cart': finalcart, cartTotal: cartTotal.length, loggedIn: req.session.loggedIn });
});

//delete cart
router.get('/delete-cart/:pid?', async (req, res) => {

  let cartDel = req.session.cart ?? []

  let finalCart = cartDel.filter((v, i) => {
    return v.pid !== req.params.pid

  })

  req.session.cart = finalCart
  // res.render('cart',{"message":"item delete successfully"})
  res.redirect('/cart')
})


module.exports = router;