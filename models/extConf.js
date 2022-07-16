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
    constructor (imageColor1, carColor1, colorPrice1, imageColor2, carColor2, colorPrice2, imageColor3, carColor3, colorPrice3, imageColor4, carColor4, colorPrice4, imageRim1, colorRim1, rimPrice1, imageRim2, colorRim2, rimPrice2, imageRoof1, roofType, imageRoof2, roofPrice  ) {
        this.imageColor1= imageColor1,
        this.carColor1= carColor1,
        this.colorPrice1= colorPrice1, 
        this.imageColor2= imageColor2, 
        this.carColor2= carColor2, 
        this.colorPrice2= colorPrice2,
        this.imageColor3= imageColor3, 
        this.carColor3= carColor3, 
        this.colorPrice3= colorPrice3, 
        this.imageColor4= imageColor4, 
        this.carColor4= carColor4, 
        this.colorPrice4= colorPrice4, 
        this.imageRim1= imageRim1, 
        this.colorRim1= colorRim1, 
        this.rimPrice1= rimPrice1, 
        this.imageRim2= imageRim2, 
        this.colorRim2= colorRim2, 
        this.rimPrice2= rimPrice2, 
        this.imageRoof1= imageRoof1, 
        this.roofType= roofType, 
        this.imageRoof2= imageRoof2, 
        this.roofPrice= roofPrice
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



