const { Item } = require('../models/index');

module.exports = {
    new: function(req, res) {
        res.render('item/new');
    },
    create: function(req, res) {
        const { name, description } = req.body;
        Item.create({
            name,
            description,
            owner: req.user._id
        }).then(item => {
            res.redirect(`item/${item._id}`);
        });
    },
    show: function(req, res) {
        Item.findById(req.params.id).then(item => {
            return res.render('item/show', { item });
        });
    },
    edit: function(req, res) {
        Item.findById(req.params.id).then(item => {
            res.render('item/edit', { item });
        });
    },
    update: function(req, res) {
        const { name, description } = req.body;

        Item.findByIdAndUpdate(
            req.params.id,
            {
                name,
                description
            },
            {
                runValidators: true
            }
        )
            .then(item => {
                res.redirect(`/item/${item._id}`);
            })
            .catch(err => {
                console.log(err);
            });
    },
    delete: function(req, res) {
        Item.deleteOne({ _id: req.params.id }).then(item => {
            // console.log(item);
            res.redirect('/');
        });
    },
    comment: function(req, res) {
        const addComment = {
            comment: req.body.comment
        };
        Item.findOneAndUpdate({ _id: req.params.id }, { $push: { comments: addComment } }).then(item => {
            res.redirect(`/item/${item._id}`);
        });
    }
};
