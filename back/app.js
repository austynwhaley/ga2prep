var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require("cors");

var indexRouter = require('./routes/index');
var clientRouter = require('./routes/clients');
var registerRouter = require('./routes/register')
var loginRouter = require('./routes/login')


var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/clients', clientRouter);
app.use('/register', registerRouter);
app.use('/login', loginRouter);

module.exports = app;
