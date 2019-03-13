// const { Comment } = require('../models/index');
// const { Item } = require('../models/item');

// module.exports = {
//     new: function(req, res) {
//         console.log('in');
//         res.render(`comment/new`);
//     },
//     create: function(req, res) {
//         const { comment } = req.body;
//         Comment.create({
//             comment,
//             owner: req.user._id
//         }).then(comment => {
//             res.redirect(`item/${item._id}/comment/new`, { comment });
//         });
//     },
//     delete: function(req, res) {
//         Comment.deleteOne({ _id: req.params.id }).then(comment => {
//             // console.log(item);
//             res.redirect('/');
//         });
//     }
// };
