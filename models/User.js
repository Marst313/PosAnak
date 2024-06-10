const mongoose = require('mongoose');

const PosyanduUserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'User must be fill the name !'],
  },
  email: {
    type: String,
    required: [true, 'User must be fill the email !'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'User must be fill the password !'],
  },
  photo: {
    type: String,
    default: 'default.jpg',
  },
  role: {
    type: String,
    enum: ['user,admin'],
    default: 'user',
  },
  phoneNumber: String,
  nik: Number,
  kids: Number,
});

const PosyanduModel = mongoose.model('users', PosyanduUserSchema);

module.exports = PosyanduModel;
