const mongoose = require('mongoose');

const PosyanduActivitySchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Admin must fill the title!'],
  },
  date: {
    type: Date,
    required: [true, 'Admin must fill the date!'],
  },
  description: {
    type: String,
    required: [true, 'Admin must fill the description!'],
  },
  waktuMulai: {
    type: String,
    required: [true, 'Admin must fill the start time!'],
  },
  waktuSelesai: {
    type: String,
    required: [true, 'Admin must fill the end time!'],
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

const ActivityModel = mongoose.model('Activity', PosyanduActivitySchema);

module.exports = ActivityModel;
