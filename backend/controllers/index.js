const auth = require('./auth.controller');
const post = require('./post.controller');
const tag = require('./tag.controller');
const upload_img = require('./uploadImg.controller');
const user = require('./user.controller');

module.exports = {
    auth,
    post,
    tag,
    upload_img,
    user
};
