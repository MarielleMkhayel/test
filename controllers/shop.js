const Product = require('../models/product');
const Details = require('../models/AddDetails');
const Conf1 = require('../models/extConf');
const Conf2 = require('../models/intConf');
const Info = require('../models/contact');
const Trim = require('../models/trimConf');
const Conf3 = require('../models/optConf');

exports.getPickCar = (req,res,next) => {
    Product.fetchAll( products => {
      res.render('shop/cars', {
        pageTitle: "Cars",
        prods: products
      });
    });
  };

  exports.getTrim= (req, res, next) => {
    //console.log("hii");
    const prodId= req.params.productId;
    Trim.findById(prodId, product => {
      if (!product) {
        return res.redirect('/home');
      };
      res.render('shop/trim', {
        pageTitle: "Select Trim",
        product: product,
        trimImg1: product.trimImg1,
        trimName1: product.trimName1,
        trimDescription1: product.trimDescription1,
        stand1: product.stand1,
        stand2: product.stand2,
        stand3: product.stand3,
        trimPrice1: product.trimPrice1,
        engineDisplacement1: product.engineDisplacement1,
        horsePower1: product.horsePower1,
        transmission1: product.transmission1,
        accel1: product.accel1,
        fuelCons1: product.fuelCons1,
        trimImg2: product.trimImg2,
        trimName2: product.trimName2,
        trimDescription2: product.trimDescription2,
        stand4: product.stand4,
        stand5: product.stand5,
        stand6: product.stand6,
        cargoSpace: product.cargoSpace,
        trimPrice2: product.trimPrice2,
        engineDisplacement2: product.engineDisplacement2,
        horsePower2: product.horsePower2,
        transmission2: product.transmission2,
        accel2: product.accel2,
        fuelCons2: product.fuelCons2,
        bodyStyle: product.bodyStyle,
        lengthWidthWheelBase: product.lengthWidthWheelBase,
        chassisType: product.chassisType,
        chassisMaterial: product.chassisMaterial,
        suspension: product.suspension,
        attribute1: product.attribute1,
        attribute2: product.attribute2,
        engine1: product.engine1,
        engine2: product.engine2,
        engineMaterial1: product.engineMaterial1,
        engineMaterial2: product.engineMaterial2,
        torque1: product.torque1,
        torque2: product.torque2,
        topSpeed1: product.topSpeed1,
        topSpeed2: product.topSpeed2,
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
    //console.log(prodId);
  };

  exports.getExt1= (req, res, next) => {
    //console.log("hi");
    const prodId= req.params.productId;
    Conf1.findById(prodId, product => {
      if (!product) {
        return res.redirect('/home');
      };
      res.render('shop/ext-conf1', {
        pageTitle: "Exterior Configurator",
        product: product,
        imageColor11: product.imageColor11,
        carColor11: product.carColor11,
        colorPrice11: product.colorPrice11,
        imageColor21: product.imageColor21,
        carColor21: product.carColor21,
        colorPrice21: product.colorPrice21,
        imageColor31: product.imageColor31,
        carColor31: product.carColor31,
        colorPrice31: product.colorPrice31,
        imageColor41: product.imageColor41,
        carColor41: product.carColor41,
        colorPrice41: product.colorPrice41,
        imageRim11: product.imageRim11,
        colorRim11: product.colorRim11,
        rimPrice11: product.rimPrice11,
        imageRim21: product.imageRim21,
        colorRim21: product.colorRim21,
        rimPrice21: product.rimPrice21,
        imageRoof11: product.imageRoof11,
        roofType11: product.roofType11,
        imageRoof21: product.imageRoof21,
        roofPrice11: product.roofPrice11
      });
    });
    //console.log(prodId);
  };
  

  exports.getInt1= (req, res, next) => {
    const prodId= req.params.productId;
    Conf2.findById(prodId, product => {
      if (!product) {
        return res.redirect('/home');
      };
      res.render('shop/int-conf1', {
        pageTitle: "Interior Configurator",
        product: product,
        imageUrl1: product.imageUrl1,
        seatImage11: product.seatImage11,
        seatColor11: product.seatColor11,
        seatPrice11: product.seatPrice11,
        seatImage21: product.seatImage21,
        seatColor21: product.seatColor21,
        seatPrice21: product.seatPrice21,
        trimImage11: product.trimImage11,
        trimN11: product.trimN11,
        trimP11: product.trimP11,
        trimImage21: product.trimImage21,
        trimN21: product.trimN21,
        trimP21: product.trimP21
      });
    });
  }; 

  exports.getOptions1= (req, res, next) => {
    const prodId= req.params.productId;
    Conf3.findById(prodId, product => {
      if (!product) {
        return res.redirect('/home');
      };
      res.render('shop/options1', {
        pageTitle: "Options Configurator",
        product: product,
        optImage11: product.optImage11,
        optName11: product.optName11,
        optDesc11: product.optDesc11,
        optPrice11: product.optPrice11,
        optImage21: product.optImage21,
        optName21: product.optName21,
        optDesc21: product.optDesc21,
        optPrice21: product.optPrice21,
        optImage31: product.optImage31,
        optName31: product.optName31,
        optDesc31: product.optDesc31,
        optPrice31: product.optPrice31
      });
    });
  }; 
  
  exports.getSummary1 = (req,res,next) => {
    const prodId= req.params.productId;
    Conf3.findById(prodId, product => {
      if (!product) {
        return res.redirect('/home');
      };
       res.render('shop/summary1', {
        pageTitle: "Summary",
        product: product
       });
      });
    };

  exports.getExt2= (req, res, next) => {
    //console.log("hi");
    const prodId= req.params.productId;
    Conf1.findById(prodId, product => {
      if (!product) {
        return res.redirect('/home');
      };
      res.render('shop/ext-conf2', {
        pageTitle: "Exterior Configurator",
        product: product,
        imageColor1: product.imageColor1,
        carColor1: product.carColor1,
        colorPrice1: product.colorPrice1,
        imageColor2: product.imageColor2,
        carColor2: product.carColor2,
        colorPrice2: product.colorPrice2,
        imageColor3: product.imageColor3,
        carColor3: product.carColor3,
        colorPrice3: product.colorPrice3,
        imageColor4: product.imageColor4,
        carColor4: product.carColor4,
        colorPrice4: product.colorPrice4,
        imageRim1: product.imageRim1,
        colorRim1: product.colorRim1,
        rimPrice1: product.rimPrice1,
        imageRim2: product.imageRim2,
        colorRim2: product.colorRim2,
        rimPrice2: product.rimPrice2,
        imageRoof1: product.imageRoof1,
        roofType: product.roofType,
        imageRoof2: product.imageRoof2,
        roofPrice: product.roofPrice
      });
    });
    //console.log(prodId);
  };
  

  exports.getInt2= (req, res, next) => {
    const prodId= req.params.productId;
    Conf2.findById(prodId, product => {
      if (!product) {
        return res.redirect('/home');
      };
      res.render('shop/int-conf2', {
        pageTitle: "Interior Configurator",
        product: product,
        imageUrl1: product.imageUrl1,
        seatImage1: product.seatImage1,
        seatColor1: product.seatColor1,
        seatPrice1: product.seatPrice1,
        seatImage2: product.seatImage2,
        seatColor2: product.seatColor2,
        seatPrice2: product.seatPrice2,
        trimImage1: product.trimImage1,
        trimN1: product.trimN1,
        trimP1: product.trimP1,
        trimImage2: product.trimImage2,
        trimN2: product.trimN2,
        trimP2: product.trimP2
      });
    });
  }; 

  exports.getOptions2= (req, res, next) => {
    const prodId= req.params.productId;
    Conf3.findById(prodId, product => {
      if (!product) {
        return res.redirect('/home');
      };
      res.render('shop/options2', {
        pageTitle: "Options Configurator",
        product: product,
        optImage1: product.optImage1,
        optName1: product.optName1,
        optDesc1: product.optDesc1,
        optPrice1: product.optPrice1,
        optImage2: product.optImage2,
        optName2: product.optName2,
        optDesc2: product.optDesc2,
        optPrice2: product.optPrice2,
        optImage3: product.optImage3,
        optName3: product.optName3,
        optDesc3: product.optDesc3,
        optPrice3: product.optPrice3
      });
    });
  }; 
  
  exports.getSummary2 = (req,res,next) => {
    const prodId= req.params.productId;
    Conf3.findById(prodId, product => {
      if (!product) {
        return res.redirect('/home');
      };
       res.render('shop/summary2', {
        pageTitle: "Summary",
        product: product
       });
      });
    };
  

exports.getDetails = (req,res,next) => {
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
      horsePower1: product.horsePower1,
      horsePower2: product.horsePower2,
      torque1: product.torque1,
      torque2: product.torque2,
      accel1: product.accel1,
      accel2: product.accel2,
      fuelCons1: product.fuelCons1,
      fuelCons2: product.fuelCons2,
      topSpeed1: product.topSpeed1,
      topSpeed2: product.topSpeed2,
      transmission1: product.transmission1,
      transmission2: product.transmission2,
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

exports.getHome = (req,res,next) => {
  res.render('shop/index', {
      pageTitle: "Home"
    });
    //console.log("ft");   
};

exports.getContact = (req,res,next) => {
    res.render('shop/contact', {
      pageTitle: "Contact Us"
    });
};

exports.postContact = (req, res, next) => {
  const firstname= req.body.firstname;
  const lastname= req.body.lastname;
  const usermail= req.body.usermail;
  const nat= req.body.nat;
  const msg= req.body.msg;
  const info = new Info(firstname, lastname, usermail, nat, msg);  //t, iUrl, desc, pr (same order as in the constructor)
  info.save();
  res.redirect('/thank_you_for_reaching_out');
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    pageTitle: "Checkout"
  });
};

exports.getAbout = (req, res, next) => {
  res.render('shop/about', {
    pageTitle: "About us"
  });
};
