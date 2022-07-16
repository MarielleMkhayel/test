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
    det.save();

    const prodId= req.params.productId;
    //console.log(prodId + " gr");
    Details.findById(prodId, product => {
    if (!product) {
      return res.redirect('/home');
    };
    //console.log("fe");
     res.render('shop/car-details', {
      pageTitle: "Car Details",
       product: product,
       carousel1: product.carousel1,
       carousel2: product.carousel2,
       carousel3: product.carousel3,
       carousel4: product.carousel4,
       carousel5: product.carousel5,
       carousel6: product.carousel6,
       carousel7: product.carousel7,
       carousel8: product.carousel8,
       pageHeader: product.pageHeader,
       imageUrl1: product.imageUrl1,
       vehicleHeader1: product.vehicleHeader1,
       vehicleText1: product.vehicleText1,
       imageUrl2: product.imageUrl2,
       vehicleHeader2: product.vehicleHeader2,
       vehicleText2: product.vehicleText2,
       imageUrl3: product.imageUrl3,
       vehicleHeader3: product.vehicleHeader3,
       vehicleText3: product.vehicleText3,
       bodyStyle: product.bodyStyle,
       lengthWidthWheelBase: product.lengthWidthWheelBase,
       chassisType: product.chassisType,
       chassisMaterial: product.chassisMaterial,
       enginePlacement: product.enginePlacement,
       suspension: product.suspension,
       cargoSpace: product.cargoSpace,
       attribute1: product.attribute1,
       attribute2: product.attribute2,
       engine1: product.engine1,
       engine2: product.engine2,
       engineMaterial1: product.engineMaterial1,
       engineMaterial2: product.engineMaterial2,
       horsepower1: product.horsepower1,
       horsepower2: product.horsepower2,
       torque1: product.torque1,
       torque2: product.torque2,
       acc1: product.acc1,
       acc2: product.acc2,
       fuel1: product.fuel1,
       fuel2: product.fuel2,
       topSpeed1: product.topSpeed1,
       topSpeed2: product.topSpeed2,
       trans1: product.trans1,
       trans2: product.trans2,
       weight1: product.weight1,
       weight2: product.weight2,
       tyres1: product.tyres1,
       tyres2: product.tyres2,
       drivingAid11: product.drivingAid11,
       drivingAid12: product.drivingAid12,
       drivingAid13: product.drivingAid13,
       drivingAid21: product.drivingAid21,
       drivingAid22: product.drivingAid22,
       drivingAid23: product.drivingAid23
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
