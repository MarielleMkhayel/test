const path= require('path');
const express= require("express");

const router= express.Router();
const carsController = require('../controllers/admin');

router.get('/add-car', carsController.getAddCar);
router.post('/add-car', carsController.postAddCar);
router.get('/adminCars', carsController.getCars);
router.get('/edit-car/:productId', carsController.getEditCar);
router.use('/add-details/:productId', carsController.getAddDetails);
router.post('/add-details/:productId', carsController.postAddDetails);

module.exports = router;


