const express = require('express')
const router = express.Router();

const usercontroller = require("../../controllers/user.controller")


// @route POST api/users
// @desc Get All Users
// @access public
router.post('/', usercontroller.addUser );

module.exports = router;