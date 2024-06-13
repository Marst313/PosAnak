const catchAsync = require('../utils/catchAsync');

const Kids = require('./../models/Kids');

exports.getAllKids = catchAsync(async (req, res, next) => {
  const data = await Kids.find();

  res.status(200).json({
    status: 'success',
    results: data.length,
    data: {
      data,
    },
  });
});

exports.createNewKids = catchAsync(async (req, res, next) => {
  const newDocument = await Kids.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      data: newDocument,
    },
  });
});

exports.editKid = catchAsync(async (req, res, next) => {
  const document = await Kids.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!document) {
    return next(new AppError('No document found with that id', 401));
  }

  res.status(200).json({
    message: 'success',
    data: { document },
  });
});

exports.singleKid = catchAsync(async (req, res, next) => {
  const document = await Kids.findById(req.params.id);

  if (!document) {
    return next(new AppError('No document found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      data: document,
    },
  });
});

exports.deleteKid = catchAsync(async (req, res, next) => {
  const document = await Kids.findByIdAndDelete(req.params.id);

  if (!document) {
    return next(new AppError('No document found with that id', 404));
  }

  res.status(204).json({
    message: 'success',
    data: null,
  });
});
