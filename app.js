const express = require('express');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const hpp = require('hpp');
const xss = require('xss-clean');
const cookieParser = require('cookie-parser');

const anakRouter = require('./routes/kidsRoutes');
const activityRouter = require('./routes/activityRoutes');

const globalErrorHandle = require('./controller/errorController');
const AppError = require('./utils/appError');

const app = express();

//! Set security HTTP headers
app.use(
  helmet({
    crossOriginEmbedderPolicy: false,
  })
);

const scriptSrcUrls = ['https://api.tiles.mapbox.com/', 'https://api.mapbox.com/', 'https://*.cloudflare.com', 'https://js.stripe.com/v3/', 'https://checkout.stripe.com'];
const styleSrcUrls = ['https://api.mapbox.com/', 'https://api.tiles.mapbox.com/', 'https://fonts.googleapis.com/', 'https://www.myfonts.com/fonts/radomir-tinkov/gilroy/*', ' checkout.stripe.com'];
const connectSrcUrls = ['https://*.mapbox.com/', 'https://*.cloudflare.com', 'http://127.0.0.1:3000', 'http://127.0.0.1:52191', '*.stripe.com'];

const fontSrcUrls = ['fonts.googleapis.com', 'fonts.gstatic.com'];

app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: [],
      connectSrc: ["'self'", ...connectSrcUrls],
      scriptSrc: ["'self'", ...scriptSrcUrls],
      styleSrc: ["'self'", "'unsafe-inline'", ...styleSrcUrls],
      workerSrc: ["'self'", 'blob:'],
      objectSrc: [],
      imgSrc: ["'self'", 'blob:', 'data:'],
      fontSrc: ["'self'", ...fontSrcUrls],
      frameSrc: ['*.stripe.com', '*.stripe.network'],
    },
  })
);

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

app.use('/api/v1/kid', anakRouter);
app.use('/api/v1/activity', activityRouter);

app.all('*', (req, res, next) => {
  next(new AppError(`Cant find ${req.originalUrl} on this server`));
});

app.use(globalErrorHandle);

module.exports = app;
