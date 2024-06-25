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
    default: 'https://firebasestorage.googleapis.com/v0/b/posyandu2-893b0.appspot.com/o/default.png?alt=media',
  },
  Created: {
    type: Date,
    default: Date.now(),
  },
});

const News = mongoose.model('news', PosyanduNewsSchema);

module.exports = News;
