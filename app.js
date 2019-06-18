const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// 数据库的连接
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/apiproject').then(
  () => console.log('成功连接localhost数据库^ _ ^'),
  err => console.log('连接失败！！！')
);

const app = express();

const users = require('./routes/users');

// Middlewares
app.use(logger('dev')); //把日志打印到控制台
app.use(bodyParser.json());

// Routes
app.use('/users', users);

// Catch 404 Errors and forward them to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Error handle function
app.use((err, req, res, next) => {
  const error = app.get('env') === 'development' ? err : {};
  const status = err.status || 500;

  // Respond to client
  res.status(status).json({
    error: {
      message: error.message
    }
  });

  // Respond to ourselves
});

// Start to server
const port = app.get('port') || 2333;
app.listen(port, () => console.log(`Server is listening on port ${port}`));