const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postThumbSchema = mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    tags: [{ type: String, required: true }],
    author: { type: Schema.Types.ObjectId, ref: 'USERS', required: true },
    linkPost: { type: String, required: true },
    description: { type: String, required: true },
    imgThumb: { type: String, required: true }
});

module.exports = mongoose.model('POST_THUMB', postThumbSchema);
