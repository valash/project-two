function authenticatedUser(req, res, next) {
	// If the user is authenticated, then we continue the execution
	if (req.isAuthenticated()) return next();

	// Otherwise the request is always redirected to the home page
	req.flash('info', 'You must be logged in to view that page');
	res.redirect('/user/login');
}

module.exports = authenticatedUser;
//It only has only one role if the user is authenticated (has the right cookies); it simply calls the next middleware. Otherwise it redirects to the page where the user can log in.
