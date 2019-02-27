// const express = require('express');
// const app = express();
// const bodyParser = require('body-parser');

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// app.set('view engine', 'hbs');

// app.use(require('./routes/index'));

// app.listen(3005, () => console.log('LETS GO'));

const express = require('express');
const app = express();
const parser = require('body-parser');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

app.set('view engine', 'hbs');
app.use(parser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.use(cookieParser());
app.use(
	session({
		secret: 'idk what this is for tbh',
		resave: false,
		saveUninitialized: false
	})
);

app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

const { User } = require('./models/index');
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next) {
	global.user = req.user;
	res.locals.user = req.user;
	next();
});

app.use(require('./routes/index'));

app.listen(3005, () => console.log('LETS GO'));
