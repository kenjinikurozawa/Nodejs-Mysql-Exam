const path = require('path');

const express = require('express');

const shopController = require('../controllers/listofpost');

const router = express.Router();

router.get('/', shopController.getIndex);

router.get('/listpost', shopController.getProducts);

router.get('/post/:productId', shopController.getProduct);


module.exports = router;
