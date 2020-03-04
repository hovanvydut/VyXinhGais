const express = require('express');
const router = express.Router();
const multer = require('multer');
const controller = require('./../controllers/index');

const storage = require('./../common/multerStorage.config');
const upload = multer({ storage: storage });

// Register and Login
router
    .post('/users/register', controller.auth.register)
    .post('/users/login', controller.auth.login);

// Upload image
router.post('/images', upload.single('file'), controller.upload_img);

// Post
router
    .get('/posts', controller.post.getPost)
    .post('/posts', controller.post.postPost)
    .get('/thumb-posts', controller.post.getThumbPost);

// tags
router
    .get('/tags', controller.tag.getTags)
    .post('/tags', controller.tag.postTag);

// users
router
    .get('/users', controller.user.getUsers)
    .post('/users', controller.user.postUser);

module.exports = router;
