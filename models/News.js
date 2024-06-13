const mongoose = require('mongoose');

const PosyanduNewsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Admin must be fill the title !'],
  },
  description: {
    type: String,
    required: [true, 'Admin must be fill the description !'],
  },
  images: {
    type: String,
    default: 'default.jpg',
  },
  time: {
    type: Date,
    required: [true, 'Admin must be fill the time'],
  },
  Created: {
    type: Date,
    default: Date.now(),
  },
});

const News = mongoose.model('news', PosyanduNewsSchema);

module.exports = News;
