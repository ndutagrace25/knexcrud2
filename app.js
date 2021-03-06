const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');



const app = express();

const stickers = require('./api/stickers');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// mount the route
app.use('/api/stickers', stickers);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})

// error handler
app.use(function (err, req, res, next) {

  res.status(err.status || 500);
  res.json({ message: err.message, error: req.app.get('env') === 'development' ? err : {} });
});

module.exports = app;
