const path= require('path');
const express= require("express");
const bodyParser = require("body-parser");
const fs= require('fs');

const app= express();

app.set('view engine', 'ejs'); 
app.set('views', 'views'); //location of ejs files

const adminRoutes= require('./routes/admin');
const pickCarRoutes= require('./routes/pickCar');
// const sepRoutes= require('./routes/separate');
const errorControllers = require('./controllers/error');

app.use(bodyParser.urlencoded({extended:false})); //he krml tzabet l input tb3 l user
app.use("/public", express.static(path.join(__dirname, 'public'))); //lal css

app.use(adminRoutes);
app.use(pickCarRoutes);
// app.use(sepRoutes);

app.use(errorControllers.getError);

console.log('server listening on port 4000');
app.listen(4000);

