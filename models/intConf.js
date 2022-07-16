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

module.exports= class Conf1 {
    constructor (imageUrl1, seatImage1, seatColor1, seatPrice1, seatImage2, seatColor2, seatPrice2, trimImage1, trimN1, trimP1, trimImage2, trimN2, trimP2) {
        this.imageUrl1= imageUrl1,
        this.seatImage1= seatImage1,
        this.seatColor1= seatColor1, 
        this.seatPrice1= seatPrice1, 
        this.seatImage2= seatImage2, 
        this.seatColor2= seatColor2,
        this.seatPrice2= seatPrice2, 
        this.trimImage1= trimImage1, 
        this.trimN1= trimN1, 
        this.trimP1= trimP1, 
        this.trimImage2= trimImage2, 
        this.trimN2= trimN2, 
        this.trimP2= trimP2
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



