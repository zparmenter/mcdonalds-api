const mongoose = require('mongoose');

const { Schema } = mongoose;

const ProductSchema = new Schema({
    name: { type: String, required: [true, 'You must provide a product name']},
    calories: { type: Number, required: [true, 'You must provide a calorie amount']},
    image: { type: String, required: [true, 'You must provide an image']},
    description: { type: String, required: [true, 'You must provide a description']},
    category: { type: String, required: [true, 'You must provide a category']}
});

const Product = mongoose.model('product', ProductSchema);
module.exports = Product;