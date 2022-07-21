const path= require('path');
const express= require("express");

const router= express.Router();
const carsController = require('../controllers/shop');

//ntbhe hon l order of execution matters


router.get('/home', carsController.getHome); 
router.get('/about', carsController.getAbout);
router.get('/cars', carsController.getPickCar);
router.get('/details/:productId', carsController.getDetails); //colon here means dynamic input into the url in the name of productId
router.get('/trim/:productId', carsController.getTrim);
router.get('/ext1/:productId', carsController.getExt1);
router.get('/int1/:productId', carsController.getInt1);
router.get('/options1/:productId', carsController.getOptions1);
router.get('/summary1/:productId', carsController.getSummary1);
router.get('/ext2/:productId', carsController.getExt2);
router.get('/int2/:productId', carsController.getInt2);
router.get('/options2/:productId', carsController.getOptions2);
router.get('/summary2/:productId', carsController.getSummary2);
router.get('/contact', carsController.getContact);

//be careful not writing one for /details/xxx after the one above, it will not be executed

module.exports= router;
