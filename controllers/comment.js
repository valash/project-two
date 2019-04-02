const { Comment } = require('../models/index');

module.exports = {
	new: function(req, res) {
		res.render('comment/new');
	},
	create: function(req, res) {
		const { comment } = req.body;
		Comment.create({
			comment,
			owner: req.user._id
		}).then((comment) => {
			res.redirect(`comment/${comment._id}`);
		});
	},
	show: function(req, res) {
		Comment.findById(req.params.id).then((comment) => {
			return res.render('comment/show', { comment });
		});
	},
	edit: function(req, res) {
		Comment.findById(req.params.id).then((comment) => {
			res.render('comment/edit', { comment });
		});
	},
	update: function(req, res) {
		const { comment } = req.body;

		Comment.findByIdAndUpdate(
			req.params.id,
			{
				comment
			},
			{
				runValidators: true
			}
		)
			.then((comment) => {
				res.redirect(`/comment/${comment._id}`);
			})
			.catch((err) => {
				console.log(err);
			});
	},
	delete: function(req, res) {
		Comment.deleteOne({ _id: req.params.id }).then(
			(comment) => {
				res.redirect('/');
			}
		);
	}
};
