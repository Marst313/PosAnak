const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const News = require('../models/News');

exports.getAllNews = catchAsync(async (req, res, next) => {
  const data = await News.find();

  res.status(200).json({
    status: 'success',
    results: data.length,
    data,
  });
});

exports.createNews = catchAsync(async (req, res, next) => {
  const newDocument = await News.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      data: newDocument,
    },
  });
});

exports.editNews = catchAsync(async (req, res, next) => {
  const document = await News.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!document) {
    return next(new AppError('No document found with that id', 401));
  }

  res.status(200).json({
    status: 'success',
    data: {
      document,
    },
  });
});

exports.singleNews = catchAsync(async (req, res, next) => {
  const data = await News.findById(req.params.id);

  if (!data) {
    return next(new AppError('There is no news with that id', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      data,
    },
  });
});

exports.deleteNews = catchAsync(async (req, res, next) => {
  const document = await News.findByIdAndDelete(req.params.id);

  if (!document) {
    return next(new AppError('There is no news with that id', 404));
  }

  res.status(204).json({
    status: 'success',
    data: null,
  });
});
