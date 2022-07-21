const { Console } = require('console');
const fs= require('fs');
const path= require('path');

const p = path.join(path.dirname(process.mainModule.filename), 
        'data',
        'products.json'
        );

const readingInfo= cb => { 
    fs.readFile(p, (err, fileContent) => {
        if (err) {
            return cb([]); 
        }
        cb(JSON.parse(fileContent)); 
    });
};

module.exports= class Trim {
    constructor (trimImg1, trimName1,trimDescription1, stand1, stand2, stand3, trimPrice1, engineDisplacement1, horsePower1, transmission1, accel1, fuelCons1, trimImg2, trimName2,trimDescription2, stand4, stand5, stand6, trimPrice2, engineDisplacement2, horsePower2, transmission2, accel2, fuelCons2) {
        this.trimImg1= trimImg1,
        this.trimName1= trimName1,
        this.trimDescription1= trimDescription1;
        this.stand1= stand1, 
        this.stand2= stand2, 
        this.stand3= stand3, 
        this.trimPrice1= trimPrice1, 
        this.engineDisplacement1= engineDisplacement1, 
        this.horsePower1= horsePower1,
        this.transmission1= transmission1, 
        this.accel1= accel1, 
        this.fuelCons1= fuelCons1,
        this.trimImg2= trimImg2,
        this.trimName2= trimName2,
        this.trimDescription2= trimDescription2;
        this.stand4= stand4, 
        this.stand5= stand5, 
        this.stand6= stand6, 
        this.trimPrice2= trimPrice2, 
        this.engineDisplacement2= engineDisplacement2, 
        this.horsePower2= horsePower2,
        this.transmission2= transmission2, 
        this.accel2= accel2, 
        this.fuelCons2= fuelCons2
        }
};



