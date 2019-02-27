module.exports = function authenticatedUser(req, res, next) {
	if (req.isAuthenticated()) return next();

	req.flash('info', 'You must be signed in to view that page');
	res.redirect('/login');
};
//It only has only one role if the user is authenticated (has the right cookies); it simply calls the next middleware. Otherwise it redirects to the page where the user can log in.
