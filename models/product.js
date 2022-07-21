const fs= require('fs');
const path= require('path');

const p = path.join(path.dirname(process.mainModule.filename), 
        'data',
        'products.json'
        );

const readingProds= cb => { //cb is a fct passed as an argument, that's why we call it cb meaning call back
    fs.readFile(p, (err, fileContent) => {
        if (err) {
            return cb([]); //argument is an empty array so mahal products bl save taht for ex, i will have an empty array and thus an empty array wil be written to my file. And here we used the return statement ONLY in order for the code not to proceed out of the if statement
        }
        cb(JSON.parse(fileContent)); //my argument here bi 7awel the json fileContent to js fileContent, and will be in products' place in the save fct below for ex, and thus fileContent ha ykoun mahal products this time w hk it will be written to my file
    });
};
 
module.exports= class Product {
    constructor(id, t, iUrl, desc, pr, conf){
        this.id = id;
        this.title = t;
        this.imageUrl= iUrl;
        this.description= desc;
        this.price= pr;
        this.confImg= conf
    }

    static addDetails(id, details, cb){
        readingProds( products => { //since readingProds byekhod one argument w ana hon 3m 3ayetla, and plus since im aware that cb is a fct, then all of this fct btw () is the cb.
            var product = products.find(p => p.id === id);
            product.details = details;
            fs.writeFile(p, JSON.stringify(products), err => { //im converting from array to json
                console.log(err);
            });
            cb(product);
        });
    }

    static addTrim(id, trim, cb){
        readingProds( products => { //since readingProds byekhod one argument w ana hon 3m 3ayetla, and plus since im aware that cb is a fct, then all of this fct btw () is the cb.
            var product = products.find(p => p.id === id);
            product.trim = trim;
            fs.writeFile(p, JSON.stringify(products), err => { //im converting from array to json
                console.log(err);
            });
            cb(product);
        });
    }

    static updateDetails(id, updatedDetails, cb){
        readingProds( products => { 
            var product = products.find(p => p.id === id);
            product.updatedDetails = updatedDetails;
            fs.writeFile(p, JSON.stringify(updatedDetails), err => { //im converting from array to json
                console.log(err);
            });
            cb(product);
        });
    }

    save(){
        readingProds( products => {
        if (this.id) {
            const existingProductIndex = products.findIndex(prod => prod.id === this.id);
            const updatedProducts = [...products];
            updatedProducts[existingProductIndex]= this;
            fs.writeFile(p, JSON.stringify(updatedProducts), err => { //im converting from array to json
                console.log(err);
            });
        }
        else {
            this.id= Math.random().toString(); //! this is not efficient, check this https://stackoverflow.com/questions/23327010/how-to-generate-unique-id-with-node-js
              //since readingProds byekhod one argument w ana hon 3m 3ayetla, and plus since im aware that cb is a fct, then all of this fct btw () is the cb.
            products.push(this); //this here refers to the class object Product, that's why we should use an arrow fct
            fs.writeFile(p, JSON.stringify(products), err => { //im converting from array to json
                console.log(err);
            });
        }
        });
        }  
    
    static deleteById(id){ //mn3ouz klmit static krml n2dr n3ayet la hal shi without having to instantiate an obj using new
        readingProds(products => {
            const updatedProducts = products.filter(prod => prod.id !== id);
            fs.writeFile(p, JSON.stringify(updatedProducts), err => { //im converting from array to json
                console.log(err);
            });
        });
    }
        
    static fetchAll(cb){ //i will accept an argument in fetchAll and that's a callback, and that actually allows me to pass a fct into fetchAll, which fetchAll will execute once it is done. So now the thing calling fetchAll in controllers/shop can pass a fct which is aware of being called, and will hold the data that i want to return 
        readingProds(cb); //the outside fct will only execute, not the inner ones which actually return the content, that's why we'll use a cb in the outside fct which will force the return of products in the inner fct where we'll call it. 
    }
    static findById (id, cb) {
        readingProds(products => {
            const product= products.find(p => p.id === id); //there's an implicit return statement in fcts made up of one line
            cb(product); //this will return the given prod and since i only have 2 lines of code here, then my code is synchronous and we have no prob
        });
    }
};

