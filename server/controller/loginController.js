const passport = require('passport');
const bcrypt = require('bcrypt');
// const loginModel = require('../model/loginModel');

const login = (req, res, next) => {
    passport.authenticate("local", (error, user) => {
        if (error) throw error;
        if (!user) {
            res.status(404).json({ error: "INVALID_USER", message: "Invalid username or password"})
        } else {
            req.login(user, (error) => {
                if (error) throw error;
                res.status(200).send({ message: "success", user: user});
            })
        }
    })(req, res, next);
}

module.exports = {login}