const jwt = require('jsonwebtoken');

function vefifyAuth(req, res, next) {
    const token = req.header('auth-token');

    if (!token) {
        return res.status(401).send('Vui long dang nhap');
    }

    try {
        const checkToken = jwt.verify(token, process.env.SECRET_TOKEN);
        res.locals.user = checkToken;
        next();
    } catch (err) {
        res.status(400).send('Token khong hop le');
    }
}

module.exports = {
    vefifyAuth
};
