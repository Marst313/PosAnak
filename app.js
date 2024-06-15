const express = require('express');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const hpp = require('hpp');
const xss = require('xss-clean');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const userRouter = require('./routes/userRoutes');
const kidsRouter = require('./routes/kidsRoutes');
const activityRouter = require('./routes/activityRoutes');
const newsRouter = require('./routes/newsRoutes');

const globalErrorHandle = require('./controller/errorController');
const AppError = require('./utils/appError');

const app = express();

//! Set security HTTP headers
app.use(
  helmet({
    crossOriginEmbedderPolicy: false,
  })
);

//! Enable CORS
const corsOptions = {
  origin: 'http://localhost:5173',
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

//! Development looging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(
  '/api',
  rateLimit({
    max: 100,
    windowMs: 60 * 60 * 1000,
    message: 'Too many request from this IP, wait again an a hour !',
  })
);

//! Body parser, reading data from body into req.body
app.use(express.json({ limit: '10kb' }));
app.use(cookieParser());

//! Data sanitization against NoSQL query injection
app.use(mongoSanitize());

//! Data sanitization against xss
app.use(xss());

//! Prevent paramater pollution
/* app.use(
  hpp({
    whitelist: [],
  })
); */

app.use('/api/v1/user', userRouter);
app.use('/api/v1/kid', kidsRouter);
app.use('/api/v1/news', newsRouter);
app.use('/api/v1/activity', activityRouter);

app.all('*', (req, res, next) => {
  next(new AppError(`Cant find ${req.originalUrl} on this server`));
});

app.use(globalErrorHandle);

module.exports = app;
