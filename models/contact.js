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

module.exports= class Info {
    constructor (firstname, lastname, usermail, nat, msg, seatColor2, seatPrice2, trimImage1, trimName1, trimPrice1, trimImage2, trimName2, trimPrice2) {
        this.firstname= firstname,
        this.lastname= lastname,
        this.usermail= usermail, 
        this.nat= nat, 
        this.msg= msg
        }

    save(){
        readingInfo ( info => { 
            info.push(this); 
            fs.writeFile(p, JSON.stringify(products), err => { 
                console.log(err);
            });
        });
    }
};



