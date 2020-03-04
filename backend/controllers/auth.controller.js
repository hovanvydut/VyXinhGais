const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const {
    loginValidation,
    registerValidation
} = require('./../common/validator');
const userModel = require('./../model/userModel');

module.exports = {
    login: async function(req, res, next) {
        // validate user
        const { error } = loginValidation(req.body);
        if (error) {
            return res.status(400).send(error.details[0].message);
        }

        const userLogin = await userModel.findOne({ email: req.body.email });
        if (!userLogin) {
            return res.status(400).send('Khong tim thay Email');
        }

        const passLogin = await bcrypt.compare(
            req.body.password,
            userLogin.password
        );
        if (!passLogin) {
            return res.status(400).send('Mat khau khong dung');
        }

        const token = jwt.sign(
            { _id: userLogin._id, name: userLogin.name },
            process.env.SECRET_TOKEN
        );
        res.header('auth-token', token).send(token);
    },
    register: async function(req, res, next) {
        // validate user
        const { error } = registerValidation(req.body);
        if (error) {
            return res.status(400).send('abc');
        }

        // Is exist this email?
        const emailExist = await userModel.findOne({ email: req.body.email });
        if (emailExist) {
            return res.status(400).send('Email is exist');
        }

        // hash pass
        const salt = await bcrypt.genSalt(10);
        const hashPass = await bcrypt.hash(req.body.password, salt);

        // create new user
        const data = {
            name: req.body.name,
            email: req.body.email,
            password: hashPass,
            birthday: req.body.birthday,
            description: req.body.description,
            created: new Date().toLocaleString()
        };

        new userModel(data)
            .save()
            .then(doc => {
                res.status(200).json(doc);
            })
            .catch(err => {
                res.status(400).json(err);
            });
    }
};
