console.log("yey");
var originalExteriorPrice=parseInt(localStorage.getItem("exteriorPrice")); //convert string to number
var dynamicPrice_2=originalExteriorPrice;

var carIntImageData;

var imageArrayRedSeat=["https://i.imgur.com/o09KHU8.png","https://i.imgur.com/FV6SdSX.png"]
var imageArrayBlackSeat=["https://i.imgur.com/sEEByDc.png","https://i.imgur.com/G7YrzWB.png"]

var [carIntImageID, dynamicPriceDiv]=[document.getElementById("carIntImage"), document.getElementById("dynamic_price")];

var [blackAlcantaraFlag, redAlcantaraFlag] = [true, false];
var [aluTrimFlag, specTrimFlag] = [true, false];

function getBase64Image(img) {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;

    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    var dataURL = canvas.toDataURL("image/png");

    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}

function changeHandler(){
     imageChanger();
     priceChanger();
     flagExporter();
     intImageExporter();
};


function setBlackAlcantaraFlag(){
    blackAlcantaraFlag=true;
    redAlcantaraFlag=false;
    changeHandler();
};

function setRedAlcantaraFlag(){
    blackAlcantaraFlag=false;
    redAlcantaraFlag=true;
    changeHandler();
};

function setAluTrimFlag(){
    aluTrimFlag=true;
    specTrimFlag=false;
    changeHandler();
};

function setSpecTrimFlag(){
    aluTrimFlag=false;
    specTrimFlag=true;
    changeHandler();
};

function imageChanger(){
    if(blackAlcantaraFlag==true && aluTrimFlag==true){
        carIntImageID.src=imageArrayBlackSeat[0];
    }
    if(blackAlcantaraFlag==true && specTrimFlag==true){
        carIntImageID.src=imageArrayBlackSeat[1];
    }
    if(redAlcantaraFlag==true && aluTrimFlag==true){
        carIntImageID.src=imageArrayRedSeat[0];
    }
    if(redAlcantaraFlag==true && specTrimFlag==true){
        carIntImageID.src=imageArrayRedSeat[1];
    }

}

function priceChanger(){
    if(blackAlcantaraFlag == true
    && aluTrimFlag==true){
        dynamicPrice_2=originalExteriorPrice;
    }
    if(blackAlcantaraFlag == true
    && specTrimFlag==true){
        dynamicPrice_2=originalExteriorPrice+500;
    }
    if(redAlcantaraFlag == true
    && aluTrimFlag==true){
        dynamicPrice_2=originalExteriorPrice+300;
    }
    if(redAlcantaraFlag == true
    && specTrimFlag==true){
        dynamicPrice_2=originalExteriorPrice+800;
    }
    localStorage.setItem("interiorPrice", dynamicPrice_2);
    return dynamicPriceDiv.innerHTML=dynamicPrice_2;
};

function flagExporter(){
    localStorage.setItem("blackAlcantaraFlag", blackAlcantaraFlag);
    localStorage.setItem("redAlcantaraFlag", redAlcantaraFlag);
    localStorage.setItem("aluTrimFlag", aluTrimFlag);
    localStorage.setItem("specTrimFlag", specTrimFlag);
};

function intImageExporter(){
    carIntImageData = getBase64Image(carIntImageID);
    localStorage.setItem("carIntImageData", carIntImageData);
}
//export {basePrice};








