const imagemin = require('imagemin');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminPngquant = require('imagemin-pngquant');
const imageminMozjpeg = require('imagemin-mozjpeg');

function generateID(length) {
    function s4() {
        return Math.floor((Math.random() + 1) * 0x10000)
            .toString(16)
            .substring(1);
    }

    let str = '';
    for (let i = 1; i <= length; i++) {
        str = str + '-' + s4();
    }
    return str;
}

// compress image
const imageMin = async imgPath => {
    const files = await imagemin([imgPath], {
        destination: 'public/uploads',
        plugins: [
            imageminMozjpeg({ quality: 70 }),
            imageminJpegtran(),
            imageminPngquant({
                quality: [0.6, 0.8]
            })
        ]
    });
};

module.exports = {
    generateID,
    imageMin
};
