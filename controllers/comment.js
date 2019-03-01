const { Comment } = require('../models/index');

module.exports = {
	new: function(req, res) {
		res.render('item/{{item.id}}/comment/new');
	},
	create: function(req, res) {
		const { comment } = req.body;
		Comment.create({
			comment,
			owner: req.user._id
		}).then((comment) => {
			res.redirect(`comment/${item._id}`);
		});
	},
	delete: function(req, res) {
		Comment.deleteOne({ _id: req.params.id }).then((comment) => {
			// console.log(item);
			res.redirect('/');
		});
	}
};
