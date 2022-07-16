const { Console } = require('console');
const fs= require('fs');
const path= require('path');

const p = path.join(path.dirname(process.mainModule.filename), 
        'data',
        'products.json'
        );

const readingProds= cb => { 
    fs.readFile(p, (err, fileContent) => {
        if (err) {
            return cb([]); 
        }
        cb(JSON.parse(fileContent)); 
    });
};

module.exports= class Details {
    constructor (carousel1, carousel2, carousel3, carousel4, carousel5, carousel6, carousel7, carousel8, pageHeader, imageUrl1, vehicleHeader1, vehicleText1, imageUrl2, vehicleHeader2, vehicleText2, imageUrl3, vehicleHeader3, vehicleText3, bodyStyle, lengthWidthWheelBase, chassisType, chassisMaterial, enginePlacement, suspension, cargoSpace, attribute1, attribute2, engine1, engine2, engineMaterial1, engineMaterial2, horsePower1, horsePower2, torque1, torque2, accel1, accel2, fuelCons1, fuelCons2, topSpeed1, topSpeed2, transmission1, transmission2, weight1, weight2, tyres1, tyres2, drivingAid11, drivingAid12, drivingAid13, drivingAid21, drivingAid22, drivingAid23) {
        this.carousel1= carousel1,
        this.carousel2= carousel2,
        this.carousel3= carousel3, 
        this.carousel4= carousel4, 
        this.carousel5= carousel5, 
        this.carousel6= carousel6,
        this.carousel7= carousel7, 
        this.carousel8= carousel8, 
        this.pageHeader= pageHeader, 
        this.imageUrl1= imageUrl1, 
        this.vehicleHeader1= vehicleHeader1, 
        this.vehicleText1= vehicleText1, 
        this.imageUrl2= imageUrl2, 
        this.vehicleHeader2= vehicleHeader2, 
        this.vehicleText2= vehicleText2, 
        this.imageUrl3= imageUrl3, 
        this.vehicleHeader3= vehicleHeader3, 
        this.vehicleText3= vehicleText3, 
        this.bodyStyle= bodyStyle, 
        this.lengthWidthWheelBase= lengthWidthWheelBase, 
        this.chassisType= chassisType, 
        this.chassisMaterial= chassisMaterial, 
        this.enginePlacement= enginePlacement, 
        this.suspension= suspension, 
        this.cargoSpace= cargoSpace, 
        this.attribute1= attribute1, 
        this.attribute2= attribute2, 
        this.engine1= engine1, 
        this.engine2= engine2, 
        this.engineMaterial1= engineMaterial1, 
        this.engineMaterial2= engineMaterial2, 
        this.horsePower1= horsePower1, 
        this.horsePower2= horsePower2, 
        this.torque1= torque1, 
        this.torque2= torque2, 
        this.accel1= accel1, 
        this.accel2= accel2, 
        this.fuelCons1= fuelCons1, 
        this.fuelCons2= fuelCons2, 
        this.topSpeed1= topSpeed1, 
        this.topSpeed2= topSpeed2, 
        this.transmission1= transmission1, 
        this.transmission2= transmission2, 
        this.weight1= weight1, 
        this.weight2= weight2, 
        this.tyres1= tyres1, 
        this.tyres2= tyres2, 
        this.drivingAid11= drivingAid11,
        this.drivingAid12= drivingAid12, 
        this.drivingAid13= drivingAid13, 
        this.drivingAid21= drivingAid21, 
        this.drivingAid22= drivingAid22, 
        this.drivingAid23= drivingAid23
             }

    save(){
        readingProds( products => { 
            products.push(this); 
            fs.writeFile(p, JSON.stringify(products), err => { 
                //console.log(err);
            });
        });
    }
    static fetchAll(cb){
        readingProds(cb); 
    }
    static findById (id, cb) {
        readingProds(products => { //bde zid 3a he l fct b shi tari2a eno the product with this specific id, i wanna add the info to it. it will be an object inside the array of products.json. i also want to make the info appear since it's always giving me an empty object.
            const product= products.find(p => p.id === id); 
            cb(product); 
        
        });
    }
};



