const mongoose = require('mongoose');

const PosyanduKidSchema = new mongoose.Schema({
  nama: {
    type: String,
    required: [true, 'Admin must be fill nama !'],
    unique: [true, 'Nama anak sudah ada gunakan nama lain !'],
  },
  namaIbu: {
    type: String,
    required: [true, 'Admin must be fill nama ibu !'],
  },
  nik: {
    type: Number,
    required: [true, 'Admin must be fill nik !'],
    min: [16, 'Not Valid !'],
    unique: [true, 'NIK sudah digunakan !'],
  },
  tanggalLahir: {
    type: Date,
    required: [true, 'Admin must be fill birth date !'],
  },
  age: Number,
  child_growth: {
    type: String,
  },
});

const KidsModel = mongoose.model('kids', PosyanduKidSchema);

module.exports = KidsModel;
