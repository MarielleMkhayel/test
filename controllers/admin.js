const Product = require('../models/product');
const Trim = require('../models/trimConf');
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
  const product = new Product(null, title, imageUrl, description, price, null);  //t, iUrl, desc, pr (same order as in the constructor)
  product.save();
  res.redirect('/adminCars');
};

exports.getAddDetails = (req, res, next) => {
  const prodId= req.params.productId;
  Product.findById(prodId, product => {
    if (!product) {
      return res.redirect('/home');
    };
    console.log(prodId);
    res.render('admin/edit-details', {
      pageTitle: "Add Details",
      product: product,
      editing: false
    });
    console.log('ha');
  });
};

exports.postAddDetails = (req, res, next) => {
  console.log("fine");
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
  
  const prodId= req.params.productId;
  console.log(prodId);
  Product.addDetails(prodId, det, product => {
    if (!product) {
      return res.redirect('/home');
    }
    res.redirect('/admin-details/' + prodId); //hk b3ayet lal route
  });
  
};

exports.getEditCar = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/home');
  };
  const prodId= req.params.productId;
  Product.findById(prodId, product => {
    if (!product) {
      return res.redirect('/home');
    }
    res.render('admin/edit-car', {
      pageTitle: "Edit Car",
      editing: editMode,
      product: product
    });
  });  
};

exports.postEditCar = (req,res,next) => {
  const prodId = req.body.productId;
  const updatedTitle = req.body.title;
  const updatedDes = req.body.description;
  const updatedPrice = req.body.price;
  const updatedImageUrl = req.body.imageUrl;
  const updatedProduct = new Product (prodId, updatedTitle, updatedImageUrl, updatedDes, updatedPrice, null);
  updatedProduct.save();
  res.redirect('/adminCars');
}

exports.postDeleteCar = (req, res, next) => {
  const prodId= req.body.productId;
  Product.deleteById(prodId);
  res.redirect('/adminCars');
}

exports.getCars = (req,res,next) => {
  Product.fetchAll( products => {
    res.render('admin/adminCars', {
      pageTitle: "Cars",
      prods: products
    });
  });
};

exports.getAdminDetails = (req,res,next) => {
  const prodId= req.params.productId;
  Product.findById(prodId, product => {
    if (!product) {
      return res.redirect('/home');
    };
    console.log("gi");
     res.render('admin/admin-car-details', {
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
      horsePower1: product.details.horsePower1,
      horsePower2: product.details.horsePower2,
      torque1: product.details.torque1,
      torque2: product.details.torque2,
      accel1: product.details.accel1,
      accel2: product.details.accel2,
      fuelCons1: product.details.fuelCons1,
      fuelCons2: product.details.fuelCons2,
      topSpeed1: product.details.topSpeed1,
      topSpeed2: product.details.topSpeed2,
      transmission1: product.details.transmission1,
      transmission2: product.details.transmission2,
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

exports.getEditDetails = (req, res, next) => {
  // const editMode = req.query.edit;
  // if (!editMode) {
  //   console.log("pa");
  //   return res.redirect('/home');
  // };
  const prodId= req.params.productId;
  Product.findById(prodId, product => {
    if (!product) {
      return res.redirect('/home');
    }
    res.render('admin/edit-details', {
      pageTitle: "Edit Details",
      editing: true,
      product: product
    });
  });  
};

exports.postEditDetails = (req,res,next) => {
  const updatedcarousel1= req.body.carousel1;
  const updatedcarousel2= req.body.carousel2;
  const updatedcarousel3= req.body.carousel3;
  const updatedcarousel4= req.body.carousel4;
  const updatedcarousel5= req.body.carousel5;
  const updatedcarousel6= req.body.carousel6;
  const updatedcarousel7= req.body.carousel7;
  const updatedcarousel8= req.body.carousel8;
  const updatedpageHeader= req.body.pageHeader;
  const updatedimageUrl1= req.body.imageUrl1;
  const updatedvehicleHeader1= req.body.vehicleHeader1;
  const updatedvehicleText1= req.body.vehicleText1;
  const updatedimageUrl2= req.body.imageUrl2;
  const updatedvehicleHeader2= req.body.vehicleHeader2;
  const updatedvehicleText2= req.body.vehicleText2;
  const updatedimageUrl3= req.body.imageUrl3;
  const updatedvehicleHeader3= req.body.vehicleHeader3;
  const updatedvehicleText3= req.body.vehicleText3;
  const updatedbodyStyle= req.body.bodyStyle;
  const updatedlengthWidthWheelBase= req.body.lengthWidthWheelBase;
  const updatedchassisType= req.body.chassisType;
  const updatedchassisMaterial= req.body.chassisMaterial;
  const updatedenginePlacement= req.body.enginePlacement;
  const updatedsuspension= req.body.suspension;
  const updatedcargoSpace= req.body.cargoSpace;
  const updatedattribute1= req.body.attribute1;
  const updatedattribute2= req.body.attribute2;
  const updatedengine1= req.body.engine1;
  const updatedengine2= req.body.engine2;
  const updatedengineMaterial1= req.body.engineMaterial1;
  const updatedengineMaterial2= req.body.engineMaterial2;
  const updatedhorsepower1= req.body.horsepower1;
  const updatedhorsepower2= req.body.horsepower2;
  const updatedtorque1= req.body.torque1;
  const updatedtorque2= req.body.torque2;
  const updatedacc1= req.body.acc1;
  const updatedacc2= req.body.acc2;
  const updatedfuel1= req.body.fuel1;
  const updatedfuel2= req.body.fuel2;
  const updatedtopSpeed1= req.body.topSpeed1;
  const updatedtopSpeed2= req.body.topSpeed2;
  const updatedtrans1= req.body.trans1;
  const updatedtrans2= req.body.trans2;
  const updatedweight1= req.body.weight1;
  const updatedweight2= req.body.weight2;
  const updatedtyres1= req.body.tyres1;
  const updatedtyres2= req.body.tyres2;
  const updateddrivingAid11= req.body.drivingAid11;
  const updateddrivingAid12= req.body.drivingAid12;
  const updateddrivingAid13= req.body.drivingAid13;
  const updateddrivingAid21= req.body.drivingAid21;
  const updateddrivingAid22= req.body.drivingAid22;
  const updateddrivingAid23= req.body.drivingAid23;
  const updatedDetails = new Details (updatedcarousel1, updatedcarousel2, updatedcarousel3, updatedcarousel4, updatedcarousel5, updatedcarousel6, updatedcarousel7, updatedcarousel8, updatedpageHeader, updatedimageUrl1, updatedvehicleHeader1, updatedvehicleText1, updatedimageUrl2, updatedvehicleHeader2, updatedvehicleText2, updatedimageUrl3, updatedvehicleHeader3, updatedvehicleText3, updatedbodyStyle, updatedlengthWidthWheelBase, updatedchassisType, updatedchassisMaterial, updatedenginePlacement, updatedsuspension, updatedcargoSpace, updatedattribute1, updatedattribute2, updatedengine1, updatedengine2, updatedengineMaterial1, updatedengineMaterial2, updatedhorsepower1, updatedhorsepower2, updatedtorque1, updatedtorque2, updatedacc1, updatedacc2, updatedfuel1, updatedfuel2, updatedtopSpeed1, updatedtopSpeed2, updatedtrans1, updatedtrans2, updatedweight1, updatedweight2, updatedtyres1, updatedtyres2, updateddrivingAid11, updateddrivingAid12, updateddrivingAid13, updateddrivingAid21, updateddrivingAid22, updateddrivingAid23);
  
  const prodId= req.params.productId;
  //console.log(prodId);
  Product.updateDetails(prodId, updatedDetails, product => {
    if (!product) {
      return res.redirect('/home');
    }
    res.redirect('/admin-details/' + prodId); //hk b3ayet lal route
  });

};

exports.getAddTrim = (req, res, next) => {
  const prodId= req.params.productId;
  Product.findById(prodId, product => {
    if (!product) {
      return res.redirect('/home');
    };
    console.log(prodId);
    res.render('admin/add-trim', {
      pageTitle: "Add Trim-levels",
      product: product
    });
    //console.log('ha');
  });
};

exports.postAddTrim = (req, res, next) => {
  console.log("fine");
  const trimImg1= req.body.trimImg1;
  const trimName1= req.body.trimName1;
  const trimDescription1= req.body.trimDescription1;
  const stand1= req.body.stand1;
  const stand2= req.body.stand2;
  const stand3= req.body.stand3;
  const trimPrice1= req.body.trimPrice1;
  const engineDisplacement1= req.body.engineDisplacement1;
  const horsePower1= req.body.horsePower1;
  const transmission1= req.body.transmission1;
  const accel1= req.body.accel1;
  const fuelCons1= req.body.fuelCons1;
  const trimImg2= req.body.trimImg2;
  const trimName2= req.body.trimName2;
  const trimDescription2= req.body.trimDescription2;
  const stand4= req.body.stand4;
  const stand5= req.body.stand5;
  const stand6= req.body.stand6;
  const trimPrice2= req.body.trimPrice2;
  const engineDisplacement2= req.body.engineDisplacement2;
  const horsePower2= req.body.horsePower2;
  const transmission2= req.body.transmission2;
  const accel2= req.body.accel2;
  const fuelCons2= req.body.fuelCons2;
  const conf = new Trim(trimImg1, trimName1,trimDescription1, stand1, stand2, stand3, trimPrice1, engineDisplacement1, horsePower1, transmission1, accel1, fuelCons1, trimImg2, trimName2,trimDescription2, stand4, stand5, stand6, trimPrice2, engineDisplacement2, horsePower2, transmission2, accel2, fuelCons2);
  
  const prodId= req.params.productId;
  console.log(prodId);
  Product.addTrim(prodId, conf, product => {
    if (!product) {
      return res.redirect('/home');
    }
    res.redirect('/admin-trim/' + prodId); //hk b3ayet lal route
  });
  
};

exports.getAdminTrim = (req,res,next) => {
  const prodId= req.params.productId;
  Product.findById(prodId, product => {
    if (!product) {
      return res.redirect('/home');
    };
    console.log("gi");
     res.render('admin/admin-trim', {
      pageTitle: "Trim Levels",
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
      horsePower1: product.details.horsePower1,
      horsePower2: product.details.horsePower2,
      torque1: product.details.torque1,
      torque2: product.details.torque2,
      accel1: product.details.accel1,
      accel2: product.details.accel2,
      fuelCons1: product.details.fuelCons1,
      fuelCons2: product.details.fuelCons2,
      topSpeed1: product.details.topSpeed1,
      topSpeed2: product.details.topSpeed2,
      transmission1: product.details.transmission1,
      transmission2: product.details.transmission2,
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