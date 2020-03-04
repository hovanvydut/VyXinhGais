const DB_HOST = process.env.DB_HOST;
const myUtils = require('./../common/ultils');

module.exports = function(req, res, next) {
    // compress img
    myUtils.imageMin(req.file.path.split('\\').join('/'));

    let imgPath =
        DB_HOST +
        req.file.path
            .split('\\')
            .slice(1)
            .join('/');

    // send img path to tinyMCE
    res.json({
        location: imgPath
    });
};
