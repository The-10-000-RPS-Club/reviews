/* eslint-disable no-unused-vars */
const mongoose = require('mongoose');
const db = require('./index.js');
// mongoose.Promise = global.Promise;

const reviewsSchema = new mongoose.Schema({
  product_id: Number,
  review_id: Number,
  nickname: String,
  rating: Number,
  title: String,
  body: String,
  images: [{
    id: Number,
    url: String,
    description: String,
  }],
  tags: [String],
  height: String,
  weight: String,
  fit: String,
  age: String,
  location: String,
  email: String,
  helpful_yes: Number,
  helpful_no: Number,

},
{
  timestamps: true,
});

const Review = mongoose.model('reviews', reviewsSchema);

module.exports = Review;
