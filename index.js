const express = require('express');
const app = express();
const parser = require('body-parser');
const cookieParser = require('cookie-parser');
const methodOverride = require('method-override');
const passport = require('passport');
const session = require('express-session');
const LocalStrategy = require('passport-local').Strategy;
const flash = require('connect-flash');

app.set('port', process.env.PORT || 3001);
app.set('view engine', 'hbs');
app.use(parser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.use(cookieParser());

app.use(
	session({
		secret: 'hello world',
		resave: false,
		saveUninitialized: false
	})
);

// app.use(
// 	require('express-session')({
// 		secret: 'okay now ladies',
// 		resave: false,
// 		saveUninitialized: false
// 	})
// );

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

app.use(express.static('public'));

app.use(require('./routes/index'));

app.listen(app.get('port'), () => {
	console.log(`✅ PORT: ${app.get('port')} 🌟`);
});
