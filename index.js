const express = require('express');
const app = express();

const parser = require('body-parser');

const cookieParser = require('cookie-parser');

const methodOverride = require('method-override');

const passport = require('passport');

const LocalStrategy = require('passport-local').Strategy;

const flash = require('connect-flash');

const { User } = require('./models/index');

app.set('view engine', 'hbs');
app.use(parser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.use(cookieParser());
app.use(
	require('express-session')({
		secret: 'keyboard cat',
		resave: false,
		saveUninitialized: false
	})
);

app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next) {
	global.user = req.user;
	res.locals.user = req.user;
	next();
});

app.use(require('./routes/index'));

app.listen(3000, () => console.log('LETS GO YALL'));
