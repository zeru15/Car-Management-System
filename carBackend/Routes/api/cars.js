const express = require('express')
const router = express.Router();
const carController = require("../../controllers/car.controller")


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
router.post('/',upload.single('img'), carController.addCar )
router.put('/', carController.requestCar )


// @route DELETE api/cars/:id
// @desc delete a car
// @access private
router.delete('/:id', carController.deleteCar)

module.exports = router;