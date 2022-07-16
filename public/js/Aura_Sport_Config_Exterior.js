console.log("sad");
var imageArrayWhite=["https://i.imgur.com/4Oqs5Eq.png","https://i.imgur.com/YL1faVJ.png",
"https://i.imgur.com/AxaaO74.png","https://i.imgur.com/9EY8wP0.png",
"https://i.imgur.com/WWZbqaN.png","https://i.imgur.com/8mokiZJ.png",
"https://i.imgur.com/JB3vWde.png","https://i.imgur.com/OE5eUaj.png"];

var imageArrayBlack=["https://i.imgur.com/BidkUC5.png","https://i.imgur.com/5Q4t3Mt.png",
"https://i.imgur.com/7SzH2m1.png","https://i.imgur.com/YJ7KP7F.png",
"https://i.imgur.com/IieXAmS.png","https://i.imgur.com/pdAPN54.png",
"https://i.imgur.com/cNwvAOe.png","https://i.imgur.com/MIUBauP.png"];

var carExtImageData;

var [whiteRimFlag, blackRimFlag] = [true, false]; //initial state for all 3 arrays
var [eurosRedFlag, flashBlueFlag, altaWhiteFlag, ardentBlackFlag]=[false, true, false, false];
var [noRoofFlag, sunRoofFlag] = [true, false];

var dynamicPrice; 

var [carExtImageID, dynamicPriceDiv]=[document.getElementById("carExtImage"), document.getElementById("dynamic_price")];

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
    extImageExporter();
}


function setEurosRedFlag(){
    eurosRedFlag=true;
    flashBlueFlag=false;
    ardentBlackFlag=false;
    altaWhiteFlag=false;
    changeHandler();
}
console.log("sad");
function setFlashBlueFlag(){
    eurosRedFlag=false;
    flashBlueFlag=true;
    ardentBlackFlag=false;
    altaWhiteFlag=false;
    changeHandler();
}

function setArdentBlackFlag(){
    eurosRedFlag=false;
    flashBlueFlag=false;
    ardentBlackFlag=true;
    altaWhiteFlag=false;
    changeHandler();
}

function setAltaWhiteFlag(){
    eurosRedFlag=false;
    flashBlueFlag=false;
    ardentBlackFlag=false;
    altaWhiteFlag=true;
    changeHandler();
}

function setWhiteRimFlag(){
    whiteRimFlag=true;
    blackRimFlag=false;
    changeHandler();
}

function setBlackRimFlag(){
    whiteRimFlag=false;
    blackRimFlag=true;
    changeHandler();
}

function setNoRoofFlag(){
    noRoofFlag=true;
    sunRoofFlag=false;
    changeHandler();
}

function setSunRoofFlag(){
    noRoofFlag=false;
    sunRoofFlag=true;
    changeHandler();
}

function imageChanger(){
    if(whiteRimFlag==true && flashBlueFlag==true && sunRoofFlag==false){
        carExtImageID.src=imageArrayWhite[0];
    }
    if(whiteRimFlag==true && flashBlueFlag==true && sunRoofFlag==true){
        carExtImageID.src=imageArrayWhite[4];
    }
    if(blackRimFlag==true && flashBlueFlag==true && sunRoofFlag==false){
        carExtImageID.src=imageArrayBlack[0];
    }
    if(blackRimFlag==true && flashBlueFlag==true && sunRoofFlag==true){
        carExtImageID.src=imageArrayBlack[4];
    }
    if(whiteRimFlag==true && eurosRedFlag==true && sunRoofFlag==false){
        carExtImageID.src=imageArrayWhite[1];
    }
    if(whiteRimFlag==true && eurosRedFlag==true && sunRoofFlag==true){
        carExtImageID.src=imageArrayWhite[5];
    }
    if(blackRimFlag==true && eurosRedFlag==true && sunRoofFlag==false){
        carExtImageID.src=imageArrayBlack[1];
    }
    if(blackRimFlag==true && eurosRedFlag==true && sunRoofFlag==true){
        carExtImageID.src=imageArrayBlack[5];
    }
    if(whiteRimFlag==true && ardentBlackFlag==true && sunRoofFlag==false){
        carExtImageID.src=imageArrayWhite[2];
    }
    if(whiteRimFlag==true && ardentBlackFlag==true && sunRoofFlag==true){
        carExtImageID.src=imageArrayWhite[6];
    }
    if(blackRimFlag==true && ardentBlackFlag==true && sunRoofFlag==false){
        carExtImageID.src=imageArrayBlack[2];
    }
    if(blackRimFlag==true && ardentBlackFlag==true && sunRoofFlag==true){
        carExtImageID.src=imageArrayBlack[6];
    }
    if(whiteRimFlag==true && altaWhiteFlag==true && sunRoofFlag==false){
        carExtImageID.src=imageArrayWhite[3];
    }
    if(whiteRimFlag==true && altaWhiteFlag==true && sunRoofFlag==true){
        carExtImageID.src=imageArrayWhite[7];
    }
    if(blackRimFlag==true && altaWhiteFlag==true && sunRoofFlag==false){
        carExtImageID.src=imageArrayBlack[3];
    }
    if(blackRimFlag==true && altaWhiteFlag==true && sunRoofFlag==true){
        carExtImageID.src=imageArrayBlack[7];
    }
}

function priceChanger(){
    if(flashBlueFlag == true
    && whiteRimFlag==true && noRoofFlag==true){
        dynamicPrice=43000;
    }
    if(flashBlueFlag == true
        && whiteRimFlag==true && sunRoofFlag==true){
            dynamicPrice=43800;
        }
    if(flashBlueFlag == true
        && blackRimFlag==true && noRoofFlag==true){
            dynamicPrice=43500;
    }
    if(flashBlueFlag == true
        && blackRimFlag==true && sunRoofFlag==true){
            dynamicPrice=44300;
    }
    if((altaWhiteFlag||eurosRedFlag||ardentBlackFlag) == true
    && whiteRimFlag==true && noRoofFlag==true){
        dynamicPrice=44000;
    }
    if((altaWhiteFlag||eurosRedFlag||ardentBlackFlag) == true
    && whiteRimFlag==true && sunRoofFlag==true){
        dynamicPrice=44800;
    }
    if((altaWhiteFlag||eurosRedFlag||ardentBlackFlag) == true
    && blackRimFlag==true && noRoofFlag==true){
        dynamicPrice=44500;
    }
    if((altaWhiteFlag||eurosRedFlag||ardentBlackFlag) == true
    && blackRimFlag==true && sunRoofFlag==true){
        dynamicPrice=45300;
    }
    localStorage.setItem("exteriorPrice", dynamicPrice);
    return dynamicPriceDiv.innerHTML=dynamicPrice;
};

function flagExporter(){
    localStorage.setItem("altaWhiteFlag", altaWhiteFlag);
    localStorage.setItem("ardentBlackFlag", ardentBlackFlag);
    localStorage.setItem("eurosRedFlag", eurosRedFlag);
    localStorage.setItem("flashBlueFlag", flashBlueFlag);
    localStorage.setItem("blackRimFlag", blackRimFlag);
    localStorage.setItem("whiteRimFlag", whiteRimFlag);
    localStorage.setItem("noRoofFlag", noRoofFlag);
    localStorage.setItem("sunRoofFlag", sunRoofFlag);
}

function extImageExporter(){
    carExtImageData = getBase64Image(carExtImageID);
    localStorage.setItem("carExtImageData", carExtImageData);
}










