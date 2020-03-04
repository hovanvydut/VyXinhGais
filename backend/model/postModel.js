const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    tags: [{ type: Schema.Types.ObjectId, ref: 'TAGS', required: true }],
    author: { type: Schema.Types.ObjectId, ref: 'USERS', required: true },
    linkPost: { type: String, required: true },
    description: { type: String, required: true },
    imgThumb: { type: String, required: true },
    created: { type: String, required: true }
});

module.exports = mongoose.model('POSTS', postSchema);
