const express = require('express');
const app = express();
const dotenv = require("dotenv");

const session = require('express-session');
const passport = require('./src/models/login/passport');
const flash = require('connect-flash');

dotenv.config();

const home = require('./src/routes/index');

app.set('views', `${__dirname}/src/views`);
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({extended: false }));
app.use(express.json());
app.use(express.static(`${__dirname}/src/public`));

app.use(session({
    secret: 'key',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60,
    },
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(flash());


app.use('/', home);

app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;