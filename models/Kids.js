const mongoose = require('mongoose');

const PosyanduKidSchema = new mongoose.Schema({
  nama: {
    type: String,
    required: [true, 'Nama anak harus diisi!'],
    unique: [true, 'Nama anak sudah ada gunakan nama lain !'],
  },
  namaIbu: {
    type: String,
    required: [true, 'Nama ibu tidak boleh kosong!'],
  },
  nik: {
    type: Number,
    required: [true, 'Nik tidak boleh kosong!'],
    validate: {
      validator: function (v) {
        return /^\d{16}$/.test(v);
      },
      message: 'NIK harus memiliki 16 digit!',
    },
    unique: [true, 'NIK sudah digunakan!'],
  },
  tanggalLahir: {
    type: Date,
    required: [true, 'Tanggal lahir tidak boleh kosong!'],
  },
  child_growth: {
    type: String,
  },
});

const KidsModel = mongoose.model('kids', PosyanduKidSchema);

module.exports = KidsModel;
