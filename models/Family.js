const mongoose = require('mongoose');

const PosyanduFamilySchema = new mongoose.Schema({
  nikKk: {
    type: String,
    required: [true, 'Admin must be fill the nik keluarga !'],
  },
  nama: {
    type: String,
    required: [true, 'Admin must be fill nama kepala keluarga !'],
  },
  nik: {
    type: String,
    required: [true, 'Admin must be fill nik kepala keluarga !'],
  },
  total: {
    type: String,
    required: [true, 'Admin must be fill total anggota !'],
  },
});

const FamilyModel = mongoose.model('family', PosyanduFamilySchema);

module.exports = FamilyModel;
