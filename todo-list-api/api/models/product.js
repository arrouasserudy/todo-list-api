var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
	name: {
		type: String,
		required: 'Kindly enter the name of the product'
	},
	category: {
		type: String,
	},
	image: {
		type: String,
	},
	prix: {
		type: Number,
	},
	marque: {
		type: String,
		required: 'Kindly enter the name of the product'
	},
	rating: {
		type: Number,
		required: 'Kindly enter the name of the product'
	},
	numReviews: {
		type: Number,
		required: 'Kindly enter the name of the product'
	},
	Created_date: {
		type: Date,
		default: Date.now
	},
});

module.exports = mongoose.model('Products', ProductSchema);
