const postModel = require('./../model/postModel');

module.exports = {
    getPost: function(req, res, next) {
        const { linkPost } = req.query;
        let condition = {};
        if (linkPost) {
            condition = { linkPost };
            postModel
                .findOne(condition)
                .populate({ path: 'author', select: 'name description' })
                .populate({ path: 'tags' })
                .exec((err, doc) => {
                    if (!doc) {
                        console.log('error at file post.controller');
                        return res.status(404).json(err);
                    } else {
                        res.status(200).json(doc);
                    }
                });
        } else {
            postModel.find(condition, (err, docs) => {
                if (err) {
                    return res.status(404).json(err);
                } else {
                    res.status(200).json(docs);
                }
            });
        }
    },
    postPost: function(req, res, next) {
        const data = {
            title: req.body.title,
            content: req.body.content,
            tags: req.body.tags,
            author: req.body.author,
            linkPost: req.body.linkPost,
            description: req.body.description,
            imgThumb: req.body.imgThumb,
            created: new Date().toLocaleString()
        };

        let doc = new postModel(data);
        doc.save((err, doc) => {
            if (err) {
                return res.status(404).json(err);
            } else {
                return res.status(200).json(doc);
            }
        });
    },
    getThumbPost: async function(req, res, next) {
        const { subject } = req.query;
        if (subject === 'newest') {
            let posts = await postModel
                .find()
                .sort({ created: 'desc' })
                .limit(10)
                .select('-content')
                .populate({ path: 'tags' })
                .populate({ path: 'author', select: 'name' });
            res.json(posts);
        }
    }
};
