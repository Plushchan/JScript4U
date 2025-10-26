const session = require("express-session");
const User = require("../models/User");
const bcrypt = require('bcrypt');
const userValidator = require("../middlewares/userValidator");

module.exports = {
    registerG: (req, res) => {
        res.render('register');
    },
    registerP: async (req, res) => {


        const username = req.body.username;
        const email = req.body.email;
        const password = req.body.password;

        const hash = await bcrypt.hash(password, 10);

        await User.create({
            name: username,
            email: email,
            password: hash,
            role: 'user'
        });
    },
    loginG: (req, res) => {
        res.render('login');
    },
    loginP: async (req, res) => {
        const { email, password } = req.body;
        const user = await User.findOne({
            where: {
                email: email
            }
        });

        if(!user) return res.status(400).json({
            message: 'The user does not exist!',
            success: false
        });

        const compare = await bcrypt.compare(password, user.password);

        if(!compare) return res.status(400).json({
            message: 'The password is incorrect!',
            success: false
        });

        req.session.user = user.id;

        return res.json({
            message: "Yes",
            success: true
        });
    }
}