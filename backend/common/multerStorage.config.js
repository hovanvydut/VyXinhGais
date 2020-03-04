const path = require('path');
const multer = require('multer');
const myUtils = require('./ultils');

module.exports = multer.diskStorage({
    destination: 'public/uploads/',
    filename: function(req, file, cb) {
        cb(
            null,
            file.fieldname +
                myUtils.generateID(5) +
                Date.now() +
                path.extname(file.originalname)
        );
    }
});
