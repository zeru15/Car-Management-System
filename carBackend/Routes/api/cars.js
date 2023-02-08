const express = require('express')
const router = express.Router();
const carController = require("../../controllers/car.controller")
const auth = require('./../../middleware/auth')


const multer  = require("multer")
const upload = multer({ dest: 'uploads/' })
// Item Model
const Car = require('../../Models/Cars')

// @route GET api/cars
// @desc Get All Cars
// @access public
router.get('/', carController.getAllCars)

// @route POST api/cars
// @desc Create a car
// @access private
router.post('/',upload.single('img'), auth, carController.addCar )

// @route PUT api/cars
// @desc Request a car
// @access private
router.put('/', auth, carController.requestCar )


// @route PUT api/cars
// @desc Approve car
// @access private
router.put('/result', auth, carController.approveCar )


// @route DELETE api/cars/:id
// @desc delete a car
// @access private
router.delete('/:id', auth, carController.deleteCar)

module.exports = router;