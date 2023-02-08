const express = require('express')
const router = express.Router();
const bcrypt = require('bcryptjs')
const config = require('config')
const jwt = require('jsonwebtoken')


// User Model
const User = require('./../Models/Users')

// @route POST api/auth
// @desc Auth user
// @access public
exports.authUser = (req, res) => {
    const { email, password } = req.body

    //Simple Validation
    if( !email || !password) {
        return res.status(400).json({ msg : 'Please Enter All Fields '})
    }

    //Check for existing user
    User.findOne({ email }) 
        .then(user => {
            if(!user) return res.status(400).json({ msg: 'User does not exist' })

            // Validate password
            bcrypt.compare(password, user.password)
                  .then(isMatch => {
                    if(!isMatch) return res.status(400).json({ msg: 'Invalid Credentials'})

                    jwt.sign(
                        {id: user.id},
                        config.get('jwtSecret'),
                        { expiresIn: 3600 },
                        (err, token) => {
                            if(err) throw err;

                            res.json({
                                token,
                                user: {
                                    id: user.id,
                                    name: user.name,
                                    email: user.email
                                }
                            });

                        }
                    )
                  });
        });
};

exports.userData = (req, res) => {
    User.findById(req.user.id)
        .select('-password')
        .then(user => res.json(user))
}