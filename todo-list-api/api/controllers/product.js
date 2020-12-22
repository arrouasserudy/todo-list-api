var mongoose = require('mongoose'),
	Product = mongoose.model('Products')

exports.getProducts = function (req, res) {
	// Recupere tout les produits
	Product.find({}, function (err, products) {
		if (err)
			res.send(err)
		// renvoi la liste de produits au client
		res.json(products)
	})
}

exports.createProduct = function (req, res) {
	// const {
	// 	name,
	// 	prix,
	// } = req.body]
	//
	// if (prix < 0) {
	// 	res.send('Error: prix < 0')
	// }
	var newProduct = new Product(req.body)

	newProduct.save(function (err, product) {
		if (err)
			res.send(err)
		res.json(product)
	})
}

exports.getProductById = function (req, res) {
	// Trouve le produit selon le id
	Product.findOne({
		_id: req.params.id,
	}, function (err, product) {
		if (err)
			res.send(err)
		// renvoi le produit au client
		res.json(product)
	})
}
