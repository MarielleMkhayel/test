const path= require('path');
const express= require("express");

const router= express.Router();
const carsController = require('../controllers/admin');

router.get('/add-car', carsController.getAddCar);
router.post('/add-car', carsController.postAddCar);
router.get('/admin-details/:productId', carsController.getAdminDetails);
router.get('/adminCars', carsController.getCars);
router.get('/edit-car/:productId', carsController.getEditCar); //hk bkhla2 route
router.post('/edit-car', carsController.postEditCar);
router.get('/add-details/:productId', carsController.getAddDetails);
router.post('/add-details/:productId', carsController.postAddDetails);
router.post('/delete-car', carsController.postDeleteCar);
router.get('/edit-details/:productId', carsController.getEditDetails); //hk bkhla2 route
router.post('/edit-details', carsController.postEditDetails);


module.exports = router;


