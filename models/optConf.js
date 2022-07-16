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

module.exports= class Conf3 {
    constructor (optImage1, optName1, optDesc1, optPrice1, optImage2, optName2, optDesc2, optPrice2, optImage3, optName3, optDesc3, optPrice3) {
        this.optImage1= optImage1,
        this.optName1= optName1,
        this.optDesc1= optDesc1, 
        this.optPrice1= optPrice1, 
        this.optImage2= optImage2,
        this.optName2= optName2,
        this.optDesc2= optDesc2, 
        this.optPrice2= optPrice2, 
        this.optImage3= optImage3,
        this.optName3= optName3,
        this.optDesc3= optDesc3, 
        this.optPrice3= optPrice3
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
        readingProds(products => { 
            const product= products.find(p => p.id === id); 
            cb(product); 
        
        });
    }
};



