var originalExteriorPrice=parseInt(localStorage.getItem("exteriorPrice")); //convert string to number
var dynamicPrice_2=originalExteriorPrice;

var carIntImageData;

var imageArrayBlackSeat=["https://i.imgur.com/WUh70u9.png","https://i.imgur.com/79QaCLb.png"]
var imageArrayBeigeSeat=["https://i.imgur.com/0DVIJaZ.png","https://i.imgur.com/SljFR7J.png"]

var [carIntImageID, dynamicPriceDiv]=[document.getElementById("carIntImage"), document.getElementById("dynamic_price")];

var [blackLeatherFlag, beigeLeatherFlag] = [true, false];
var [leatherTrimFlag, woodTrimFlag] = [true, false];

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


function setBlackLeatherFlag(){
    blackLeatherFlag=true;
    beigeLeatherFlag=false;
    changeHandler();
};

function setBeigeLeatherFlag(){
    blackLeatherFlag=false;
    beigeLeatherFlag=true;
    changeHandler();
};

function setLeatherTrimFlag(){
    leatherTrimFlag=true;
    woodTrimFlag=false;
    changeHandler();
};

function setWoodTrimFlag(){
    leatherTrimFlag=false;
    woodTrimFlag=true;
    changeHandler();
};

function imageChanger(){
    if(blackLeatherFlag==true && leatherTrimFlag==true){
        carIntImageID.src=imageArrayBlackSeat[0];
    }
    if(blackLeatherFlag==true && woodTrimFlag==true){
        carIntImageID.src=imageArrayBlackSeat[1];
    }
    if(beigeLeatherFlag==true && leatherTrimFlag==true){
        carIntImageID.src=imageArrayBeigeSeat[0];
    }
    if(beigeLeatherFlag==true && woodTrimFlag==true){
        carIntImageID.src=imageArrayBeigeSeat[1];
    }

}

function priceChanger(){
    if(blackLeatherFlag == true
    && leatherTrimFlag==true){
        dynamicPrice_2=originalExteriorPrice;
    }
    if(beigeLeatherFlag == true
    && leatherTrimFlag==true){
        dynamicPrice_2=originalExteriorPrice;
    }
    if(blackLeatherFlag == true
    && woodTrimFlag==true){
        dynamicPrice_2=originalExteriorPrice+900;
    }
    if(beigeLeatherFlag == true
    && woodTrimFlag==true){
        dynamicPrice_2=originalExteriorPrice+900;
    }
    localStorage.setItem("interiorPrice", dynamicPrice_2);
    return dynamicPriceDiv.innerHTML=dynamicPrice_2;
};

function flagExporter(){
    localStorage.setItem("blackLeatherFlag", blackLeatherFlag);
    localStorage.setItem("beigeLeatherFlag", beigeLeatherFlag);
    localStorage.setItem("leatherTrimFlag", leatherTrimFlag);
    localStorage.setItem("woodTrimFlag", woodTrimFlag);
};

function intImageExporter(){
    carIntImageData = getBase64Image(carIntImageID);
    localStorage.setItem("carIntImageData", carIntImageData);
}
//export {basePrice};








