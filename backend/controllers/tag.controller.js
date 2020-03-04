const tagSchema = require('./../model/tagModel');

module.exports = {
    getTags: function(req, res) {
        tagSchema.find({}, (err, docs) => {
            if (err) {
                return res.status(404).json(err);
            } else {
                return res.status(200).json(docs);
            }
        });
    },
    postTag: function(req, res) {
        const data = {
            name: req.body.name
        };
        const doc = new tagSchema(data);
        doc.save((err, doc) => {
            if (err) {
                return res.status(404).json(err);
            } else {
                return res.status(404).json(doc);
            }
        });
    }
};
