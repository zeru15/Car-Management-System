const Car = require('../Models/Cars')

exports.getAllCars = async (req, res,next) => {
    const {status} = req.query
    const {result} = req.query
    if(status) {

       await Car.find({isRequested: status})
            .sort({ date: -1 })
            .then(cars => res.json(cars))
    }
    else if(result) {
        await Car.find({isApproved: result})
            .sort({ date: -1 })
            .then(cars => res.json(cars))
    }
    else {
        await Car.find()
            .sort({ date: -1 })
            .then(cars => res.json(cars))
    }
}


exports.addCar = async (req, res,next) => {
    console.log("body")
    const cloudinary = require('cloudinary').v2;


    // Configuration 
    cloudinary.config({
      cloud_name: "dzalpusxw",
      api_key: "733829174818648",
      api_secret: "5u3CwWI96oOVHo7oGRxcCJ-tpto"
    });
    const image = await cloudinary.uploader.upload(req.file.path, {public_id: req.file.originalname})
    console.log(image)
    console.log(req.body)
    console.log(req.file);
    // res.json({message:"Hello",body:req.body})
    const newCar = new Car({
        img: image["url"],
        model: req.body.model,
        dName: req.body.dName,
        plateNo: req.body.plateNo,
        status: req.body.status,
    })

    await newCar.save().then(car => res.json(car))
}

exports.requestCar = async (req, res,next) => {
    console.log("body")
    const { carId, userId } = req.body
    const car = await Car.findById(carId)
    if (!car) {
        return res.status(404).json({msg: "Car Not Found!"})
    }
    console.log(car);
    car.requestedBy = userId
    car.isRequested = true

    await car.save()
    res.status(200).json({msg: "Request Successful "})
}

exports.approveCar = async (req, res,next) => {
    console.log("body")
    const { carId, userId } = req.body
    const car = await Car.findById(carId)
    // if (!car) {
    //     return res.status(404).json({msg: "Car Not Found!"})
    // }
    console.log(car);
    car.requestedBy = userId
    car.isRequested = true
    car.isApproved = true

    await car.save()
    res.status(200).json({msg: " Approved "})
}

exports.deleteCar = async (req, res,next) => {
    Car.findById(req.params.id)
    .then(car => car.remove().then(() => res.json({success : true})))
    .catch(err => res.status(404).json({success : false}))
    }