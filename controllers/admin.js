const Product = require('../models/product');
const Details = require('../models/AddDetails');

exports.getAddCar = (req, res, next) => {
    res.render('admin/edit-car', {
      pageTitle: "Add Car",
      editing: false
    });
  };

exports.postAddCar = (req, res, next) => {
    const title= req.body.title;
    const imageUrl= req.body.imageUrl;
    const description= req.body.description;
    const price= req.body.price;
    const product = new Product(title, imageUrl, description, price);  //t, iUrl, desc, pr (same order as in the constructor)
    product.save();
    res.redirect('/cars');
  };

  exports.getAddDetails = (req, res, next) => {
    const prodId= req.params.productId;
    Details.findById(prodId, product => {
      if (!product) {
        return res.redirect('/home');
      };
      //console.log(prodId +' grad');
      res.render('admin/add-details', {
        pageTitle: "Add Details",
        product: product
      });
      //console.log('ha');
    });
  };

  exports.postAddDetails = (req, res, next) => {
    //console.log("fine");
    const carousel1= req.body.carousel1;
    const carousel2= req.body.carousel2;
    const carousel3= req.body.carousel3;
    const carousel4= req.body.carousel4;
    const carousel5= req.body.carousel5;
    const carousel6= req.body.carousel6;
    const carousel7= req.body.carousel7;
    const carousel8= req.body.carousel8;
    const pageHeader= req.body.pageHeader;
    const imageUrl1= req.body.imageUrl1;
    const vehicleHeader1= req.body.vehicleHeader1;
    const vehicleText1= req.body.vehicleText1;
    const imageUrl2= req.body.imageUrl2;
    const vehicleHeader2= req.body.vehicleHeader2;
    const vehicleText2= req.body.vehicleText2;
    const imageUrl3= req.body.imageUrl3;
    const vehicleHeader3= req.body.vehicleHeader3;
    const vehicleText3= req.body.vehicleText3;
    const bodyStyle= req.body.bodyStyle;
    const lengthWidthWheelBase= req.body.lengthWidthWheelBase;
    const chassisType= req.body.chassisType;
    const chassisMaterial= req.body.chassisMaterial;
    const enginePlacement= req.body.enginePlacement;
    const suspension= req.body.suspension;
    const cargoSpace= req.body.cargoSpace;
    const attribute1= req.body.attribute1;
    const attribute2= req.body.attribute2;
    const engine1= req.body.engine1;
    const engine2= req.body.engine2;
    const engineMaterial1= req.body.engineMaterial1;
    const engineMaterial2= req.body.engineMaterial2;
    const horsepower1= req.body.horsepower1;
    const horsepower2= req.body.horsepower2;
    const torque1= req.body.torque1;
    const torque2= req.body.torque2;
    const acc1= req.body.acc1;
    const acc2= req.body.acc2;
    const fuel1= req.body.fuel1;
    const fuel2= req.body.fuel2;
    const topSpeed1= req.body.topSpeed1;
    const topSpeed2= req.body.topSpeed2;
    const trans1= req.body.trans1;
    const trans2= req.body.trans2;
    const weight1= req.body.weight1;
    const weight2= req.body.weight2;
    const tyres1= req.body.tyres1;
    const tyres2= req.body.tyres2;
    const drivingAid11= req.body.drivingAid11;
    const drivingAid12= req.body.drivingAid12;
    const drivingAid13= req.body.drivingAid13;
    const drivingAid21= req.body.drivingAid21;
    const drivingAid22= req.body.drivingAid22;
    const drivingAid23= req.body.drivingAid23;
    const det = new Details(carousel1, carousel2, carousel3, carousel4, carousel5, carousel6, carousel7, carousel8, pageHeader, imageUrl1, vehicleHeader1, vehicleText1, imageUrl2, vehicleHeader2, vehicleText2, imageUrl3, vehicleHeader3, vehicleText3, bodyStyle, lengthWidthWheelBase, chassisType, chassisMaterial, enginePlacement, suspension, cargoSpace, attribute1, attribute2, engine1, engine2, engineMaterial1, engineMaterial2, horsepower1, horsepower2, torque1, torque2, acc1, acc2, fuel1, fuel2, topSpeed1, topSpeed2, trans1, trans2, weight1, weight2, tyres1, tyres2, drivingAid11, drivingAid12, drivingAid13, drivingAid21, drivingAid22, drivingAid23);
    // det.save();

    const prodId= req.params.productId;

    Product.addDetails(prodId, det, product => {
      if (!product) {
        return res.redirect('/home');
      }
      res.render('shop/car-details', {
        pageTitle: "Car Details",
         product: product,
         carousel1: product.details.carousel1,
         carousel2: product.details.carousel2,
         carousel3: product.details.carousel3,
         carousel4: product.details.carousel4,
         carousel5: product.details.carousel5,
         carousel6: product.details.carousel6,
         carousel7: product.details.carousel7,
         carousel8: product.details.carousel8,
         pageHeader: product.details.pageHeader,
         imageUrl1: product.details.imageUrl1,
         vehicleHeader1: product.details.vehicleHeader1,
         vehicleText1: product.details.vehicleText1,
         imageUrl2: product.details.imageUrl2,
         vehicleHeader2: product.details.vehicleHeader2,
         vehicleText2: product.details.vehicleText2,
         imageUrl3: product.details.imageUrl3,
         vehicleHeader3: product.details.vehicleHeader3,
         vehicleText3: product.details.vehicleText3,
         bodyStyle: product.details.bodyStyle,
         lengthWidthWheelBase: product.details.lengthWidthWheelBase,
         chassisType: product.details.chassisType,
         chassisMaterial: product.details.chassisMaterial,
         enginePlacement: product.details.enginePlacement,
         suspension: product.details.suspension,
         cargoSpace: product.details.cargoSpace,
         attribute1: product.details.attribute1,
         attribute2: product.details.attribute2,
         engine1: product.details.engine1,
         engine2: product.details.engine2,
         engineMaterial1: product.details.engineMaterial1,
         engineMaterial2: product.details.engineMaterial2,
         horsepower1: product.details.horsepower1,
         horsepower2: product.details.horsepower2,
         torque1: product.details.torque1,
         torque2: product.details.torque2,
         acc1: product.details.acc1,
         acc2: product.details.acc2,
         fuel1: product.details.fuel1,
         fuel2: product.details.fuel2,
         topSpeed1: product.details.topSpeed1,
         topSpeed2: product.details.topSpeed2,
         trans1: product.details.trans1,
         trans2: product.details.trans2,
         weight1: product.details.weight1,
         weight2: product.details.weight2,
         tyres1: product.details.tyres1,
         tyres2: product.details.tyres2,
         drivingAid11: product.details.drivingAid11,
         drivingAid12: product.details.drivingAid12,
         drivingAid13: product.details.drivingAid13,
         drivingAid21: product.details.drivingAid21,
         drivingAid22: product.details.drivingAid22,
         drivingAid23: product.details.drivingAid23
      });
    });
    
  };

  exports.getEditCar = (req, res, next) => {
    //const editMode = req.query.edit;
    // if (!editMode) {
    //   return res.redirect('/home');
    // };
    const prodId= req.params.productId;
    Product.findById(prodId, product => {
      if (!product) {
        return res.redirect('/home');
      }
      res.render('admin/edit-car', {
        pageTitle: "Edit Car",
        //editing: editMode,
        editing: true,
        product: product
      });
    });  
  };

  exports.getCars = (req,res,next) => {
    Product.fetchAll( products => {
      res.render('admin/adminCars', {
        pageTitle: "Cars",
        prods: products
      });
    });
  };
