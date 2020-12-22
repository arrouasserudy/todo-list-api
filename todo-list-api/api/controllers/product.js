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

const Stripe = require('stripe');
const stripe = Stripe('sk_test_51HnwLiEP7MDaFxh2FjCxnmnlnUXkuRtjNSyto1xG8k0u8xiM1RqW0tx6JHrHTDW85XVFhuu2ZwtFjWfMnG7GIAiR00vp5cPIX1');


exports.pay = async function (req, res) {
	const session = await stripe.checkout.sessions.create({
		payment_method_types: ['card'],
		line_items: [
			{
				price_data: {
					currency: 'usd',
					product_data: {
						name: 'T-shirt',
					},
					unit_amount: 2000,
				},
				quantity: 1,
			},
		],
		mode: 'payment',
		success_url: 'https://example.com/success',
		cancel_url: 'https://example.com/cancel',
	});

	res.json({ id: session.id });
}
