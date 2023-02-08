const express = require('express')
const router = express.Router();
const auth = require('./../../middleware/auth')

const authcontroller = require("../../controllers/auth.controller")


// @route POST api/auth
// @desc Auth User
// @access public
router.post('/', authcontroller.authUser);


// @route GET api/auth/user
// @desc Get user data
// @access private
router.get('/user', auth, authcontroller.userData);
module.exports = router;