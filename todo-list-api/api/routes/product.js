'use strict';
module.exports = function(app) {
	var products = require('../controllers/product');

	// todoList Routes
	app.route('/products')
	.get(products.getProducts)
	.post(products.createProduct)

	app.route('/products/:id')
	.get(products.getProductById);

	app.route('/pay')
	.post(products.pay);
};
