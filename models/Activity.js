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
    validate: {
      validator: function (v) {
        return /^([01]\d|2[0-3]):([0-5]\d)$/.test(v);
      },
      message: (props) => `${props.value} is not a valid start time! Format should be HH:mm.`,
    },
  },
  waktuSelesai: {
    type: String,
    required: [true, 'Admin must fill the end time!'],
    validate: {
      validator: function (v) {
        return /^([01]\d|2[0-3]):([0-5]\d)$/.test(v);
      },
      message: (props) => `${props.value} is not a valid end time! Format should be HH:mm.`,
    },
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

const ActivityModel = mongoose.model('Activity', PosyanduActivitySchema);

module.exports = ActivityModel;
