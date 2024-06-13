const { promisify } = require('util');
const jwt = require('jsonwebtoken');

const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const { createSendToken } = require('../utils/index');
const User = require('../models/User');

exports.register = catchAsync(async (req, res, next) => {
  const newUser = await User.create(req.body);

  // let url = `${req.protocol}://${process.env.NODE_ENV === 'development' ? 'localhost:3000' : req.get('host')}/me`;

  createSendToken(newUser, 201, res);
});

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  // 1. Check if email and password exist
  if (!email || !password) {
    return next(new AppError('Please provide email and password!', 400));
  }

  // 2.  Check if user exit and password correct
  const user = await User.findOne({ email }).select('+password');

  if (!user || !(await user.checkPassword(password, user.password))) {
    return next(new AppError('Incorrect email or password', 401));
  }

  // 3. Send token to client
  createSendToken(user, 200, res);
});

exports.logout = (req, res) => {
  res.cookie('jwt', 'logout', {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true,
  });
  res.status(200).json({ status: 'success' });
};

// ! Check Account Already Login
exports.protect = catchAsync(async (req, res, next) => {
  let token;

  // 1. Getting token and check if there is token
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  } else if (req.cookies.jwt) {
    token = req.cookies.jwt;
  }

  if (!token) {
    return next(new AppError('You are not logged in! Please log in to get access.', 401));
  }

  // 2. Verify token
  const decode = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  // 3. Check if user still exist
  const currentUser = await User.findById(decode.id);
  if (!currentUser) {
    return next(new AppError('The user belonging to this token does no longer exist', 401));
  }

  // 4. Check if user changed password after the token was issued
  if (await currentUser.changedPasswordAfter(decode.iat)) {
    return next(new AppError('User recently changed password! Please login again!', 401));
  }

  // GRANT ACCESS TO PROTECTED ROUTE
  req.user = currentUser;
  res.locals.user = currentUser;

  next();
});

exports.isLoggedIn = async (req, res, next) => {
  if (req.cookies.jwt) {
    try {
      // 1. Verify token
      const decode = await promisify(jwt.verify)(req.cookies.jwt, process.env.JWT_SECRET);

      // 2. Check if user still exist
      const currentUser = await User.findById(decode.id);

      if (!currentUser) {
        return next(new AppError('User already logout!', 401));
      }
    } catch (error) {
      return next();
    }
  }
};

exports.restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(new AppError('You do not have permission to perform this action', 403));
    }

    next();
  };
};
