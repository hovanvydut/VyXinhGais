const userModel = require('./../model/userModel');
const bcrypt = require('bcryptjs');
const { registerValidation } = require('./../common/validator');

module.exports = {
    getUsers: function(req, res) {
        userModel
            .find({})
            .then(docs => {
                return res.status(200).json(docs);
            })
            .catch(err => {
                return res.status(404).json(err);
            });
    },
    postUser: async function(req, res) {
        // validate user
        const { error } = registerValidation(req.body);
        if (error) {
            return res.status(400).send(error.details[0].message);
        }

        // Is exist this email?
        const emailExist = await userModel.findOne({ email: req.body.email });
        if (emailExist) {
            return res.status(400).json('Email is exist');
        }

        const salt = bcrypt.genSaltSync(10);
        const hashPass = bcrypt.hashSync(req.body.password, salt);
        const data = {
            name: req.body.name,
            email: req.body.email,
            password: hashPass,
            description: req.body.description,
            birthday: req.body.birthday,
            created: new Date().toLocaleString()
        };

        new userModel(data)
            .save()
            .then(doc => {
                return res.status(200).json(doc);
            })
            .catch(err => {
                return res.status(400).json(err);
            });
    }
};
