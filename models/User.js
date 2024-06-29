const mongoose = require('mongoose');
const crypto = require('crypto');
const bcrypt = require('bcrypt');

const PosyanduUserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'User must be fill the name !'],
  },
  email: {
    type: String,
    required: [true, 'User must be fill the email !'],
    unique: [true, 'Email sudah terdaftar gunakan email lain!'],
  },
  password: {
    type: String,
    required: [true, 'User must be fill the password !'],
    minlength: [8, 'Password harus lebih dari 8 karakter!'],
  },
  photo: {
    type: String,
    default: 'default.jpg',
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
  nikKids: {
    type: [Number],
    validate: {
      validator: function (v) {
        return v.every((num) => /^\d{16}$/.test(num));
      },
      message: 'NIK anak harus memiliki 16 digit!',
    },
    unique: [true, 'NIK sudah digunakan!'],
  },
  passwordChangedAt: Date,
  passwordResetToken: String,
  passwordResetExpires: Date,
});

PosyanduUserSchema.pre('save', async function (next) {
  // ! Check if password not modified
  if (!this.isModified('password')) return next();

  // ! Hash the password
  this.password = await bcrypt.hash(this.password, 12);

  next();
});

// ! Check if password is changed
PosyanduUserSchema.methods.changedPasswordAfter = async function (JWTTimeStamps) {
  if (this.passwordChangedAt) {
    const convertPasswordChangedAt = parseInt(this.passwordChangedAt.getTime() / 100, 10);

    return JWTTimeStamps > convertPasswordChangedAt;
  }
};

PosyanduUserSchema.methods.checkPassword = async function (inputPassword, userPassword) {
  return await bcrypt.compare(inputPassword, userPassword);
};

// ! Create password reset token
PosyanduUserSchema.methods.createPasswordResetToken = function () {
  const resetToken = crypto.randomBytes(32).toString('hex');

  this.passwordResetToken = crypto.createHash('sha256').update(resetToken).digest('hex');
  this.passwordResetExpires = Date.now() + 10 * 60 * 1000;

  return resetToken;
};

const PosyanduModel = mongoose.model('users', PosyanduUserSchema);

module.exports = PosyanduModel;
