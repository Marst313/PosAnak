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
  nik: String,
  images: String,
  time: Date,
});

const NewsModel = mongoose.model('news', PosyanduNewsSchema);

module.exports = NewsModel;
