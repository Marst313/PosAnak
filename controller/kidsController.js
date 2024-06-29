const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

const Kids = require('./../models/Kids');
const User = require('./../models/User');

exports.getAllKids = catchAsync(async (req, res, next) => {
  const data = await Kids.find().lean();

  res.status(200).json({
    status: 'success',
    results: data.length,

    data,
  });
});

exports.createNewKids = catchAsync(async (req, res, next) => {
  const newDocument = await Kids.create(req.body);

  res.status(201).json({
    status: 'success',
    data: newDocument,
  });
});

exports.editKid = catchAsync(async (req, res, next) => {
  const document = await Kids.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!document) {
    return next(new AppError('Tidak ada anak dengan id tersebut!', 401));
  }

  res.status(200).json({
    message: 'success',
    data: { document },
  });
});

exports.singleKid = catchAsync(async (req, res, next) => {
  const data = await Kids.findById(req.params.id).lean();

  if (!data) {
    return next(new AppError('Tidak ada anak dengan id tersebut!', 404));
  }

  res.status(200).json({
    status: 'success',
    data,
  });
});

exports.deleteKid = catchAsync(async (req, res, next) => {
  const document = await Kids.findByIdAndDelete(req.params.id);

  if (!document) {
    return next(new AppError('Tidak ada anak dengan id tersebut!', 404));
  }

  res.status(204).json({
    message: 'success',
    data: null,
  });
});

exports.connectKid = catchAsync(async (req, res, next) => {
  const nikArray = req.body.nik; //! Expecting an array of NIKs

  //! 1. Check if each NIK exists in the Kids collection
  for (const nik of nikArray) {
    const kid = await Kids.findOne({ nik });
    if (!kid) {
      return next(new AppError(`Tidak ada anak dengan NIK ${nik}, silahkan daftarkan terlebih dahulu`, 404));
    }
  }

  //! 2. Check if each NIK is already used by another user
  for (const nik of nikArray) {
    const userWithNik = await User.findOne({ nikKids: nik });
    if (userWithNik && userWithNik.id !== req.user.id) {
      return next(new AppError(`NIK ${nik} sudah digunakan oleh user lain!`, 400));
    }
  }

  //! 3. Update nikKids in the User model
  const updatedUser = await User.findByIdAndUpdate(req.user.id, { nikKids: nikArray }, { new: true, runValidators: true });

  //! 4. Send success response
  res.status(200).json({
    message: 'success',
    data: updatedUser,
  });
});
