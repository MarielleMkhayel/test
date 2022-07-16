var imageArraySmall=["https://i.imgur.com/HEq2Q49.png", "https://i.imgur.com/YP75DW7.png", 
"https://i.imgur.com/JgDkLQ5.png", "https://i.imgur.com/iiFflug.png", "https://i.imgur.com/heFUYk9.png",
"https://i.imgur.com/JE9bktd.png","https://i.imgur.com/Uww2Ork.png", "https://i.imgur.com/leuUrer.png"];

var imageArrayLarge=["https://i.imgur.com/x8Ejdc6.png", "https://i.imgur.com/rnyA9K6.png", 
"https://i.imgur.com/v5MKcY9.png", "https://i.imgur.com/TPFKDwT.png", 
"https://i.imgur.com/S8KvZQB.png","https://i.imgur.com/C3cyZip.png", 
"https://i.imgur.com/Ty0n1Wu.png", "https://i.imgur.com/FBIHREo.png"];

var carExtImageData;

var [smallRimFlag, largeRimFlag] = [true, false];
var [ardentBlackFlag, excellenceMauveFlag, ozelaisFlag, champagneMystFlag]=[true, false, false, false];
var [noRoofFlag, sunRoofFlag] = [true, false];

var dynamicPrice;

var [carExtImageID, dynamicPriceDiv]=[document.getElementById("carExtImage"), document.getElementById("dynamic_price")];

function getBase64Image(img){
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


function setArdentBlackFlag(){
    ardentBlackFlag=true;
    excellenceMauveFlag=false;
    ozelaisFlag=false;
    champagneMystFlag=false;
    changeHandler();
}

function setExcellenceMauveFlag(){
    ardentBlackFlag=false;
    excellenceMauveFlag=true;
    ozelaisFlag=false;
    champagneMystFlag=false;
    changeHandler();
}

function setOzelaisFlag(){
    ardentBlackFlag=false;
    excellenceMauveFlag=false;
    ozelaisFlag=true;
    champagneMystFlag=false;
    changeHandler();
}

function setChampagneMystFlag(){
    ardentBlackFlag=false;
    excellenceMauveFlag=false;
    ozelaisFlag=false;
    champagneMystFlag=true;
    changeHandler();
}

function setSmallRimFlag(){
    smallRimFlag=true;
    largeRimFlag=false;
    changeHandler();
}

function setLargeRimFlag(){
    smallRimFlag=false;
    largeRimFlag=true;
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
    if(smallRimFlag==true && ardentBlackFlag==true && sunRoofFlag==false){
        carExtImageID.src=imageArraySmall[0];
    }
    if(smallRimFlag==true && ardentBlackFlag==true && sunRoofFlag==true){
        carExtImageID.src=imageArraySmall[4];
    }
    if(largeRimFlag==true && ardentBlackFlag==true && sunRoofFlag==false){
        carExtImageID.src=imageArrayLarge[0];
    }
    if(largeRimFlag==true && ardentBlackFlag==true && sunRoofFlag==true){
        carExtImageID.src=imageArrayLarge[4];
    }
    if(smallRimFlag==true && excellenceMauveFlag==true && sunRoofFlag==false){
        carExtImageID.src=imageArraySmall[1];
    }
    if(smallRimFlag==true && excellenceMauveFlag==true && sunRoofFlag==true){
        carExtImageID.src=imageArraySmall[5];
    }
    if(largeRimFlag==true && excellenceMauveFlag==true && sunRoofFlag==false){
        carExtImageID.src=imageArrayLarge[1];
    }
    if(largeRimFlag==true && excellenceMauveFlag==true && sunRoofFlag==true){
        carExtImageID.src=imageArrayLarge[5];
    }
    if(smallRimFlag==true && ozelaisFlag==true && sunRoofFlag==false){
        carExtImageID.src=imageArraySmall[2];
    }
    if(smallRimFlag==true && ozelaisFlag==true && sunRoofFlag==true){
        carExtImageID.src=imageArraySmall[6];
    }
    if(largeRimFlag==true && ozelaisFlag==true && sunRoofFlag==false){
        carExtImageID.src=imageArrayLarge[2];
    }
    if(largeRimFlag==true && ozelaisFlag==true && sunRoofFlag==true){
        carExtImageID.src=imageArrayLarge[6];
    }
    if(smallRimFlag==true && champagneMystFlag==true && sunRoofFlag==false){
        carExtImageID.src=imageArraySmall[3];
    }
    if(smallRimFlag==true && champagneMystFlag==true && sunRoofFlag==true){
        carExtImageID.src=imageArraySmall[7];
    }
    if(largeRimFlag==true && champagneMystFlag==true && sunRoofFlag==false){
        carExtImageID.src=imageArrayLarge[3];
    }
    if(largeRimFlag==true && champagneMystFlag==true && sunRoofFlag==true){
        carExtImageID.src=imageArrayLarge[7];
    }
}

function priceChanger(){
    if(ardentBlackFlag == true
    && smallRimFlag==true && noRoofFlag==true){
        dynamicPrice=36000;
    }
    if(ardentBlackFlag == true
        && smallRimFlag==true && sunRoofFlag==true){
            dynamicPrice=36800;
        }
    if(ardentBlackFlag == true
        && largeRimFlag==true && noRoofFlag==true){
            dynamicPrice=37300;
    }
    if(ardentBlackFlag == true
        && largeRimFlag==true && sunRoofFlag==true){
            dynamicPrice=38100;
    }
    if(excellenceMauveFlag == true
    && smallRimFlag==true && noRoofFlag==true){
        dynamicPrice=37000;
    }
    if(excellenceMauveFlag == true
        && smallRimFlag==true && sunRoofFlag==true){
            dynamicPrice=37800;
        }
    if(excellenceMauveFlag == true
        && largeRimFlag==true && noRoofFlag==true){
            dynamicPrice=38300;
    }
    if(excellenceMauveFlag == true
        && largeRimFlag==true && sunRoofFlag==true){
            dynamicPrice=39100;
    }
    if(ozelaisFlag == true
    && smallRimFlag==true && noRoofFlag==true){
        dynamicPrice=37500;
    }
    if(ozelaisFlag == true
        && smallRimFlag==true && sunRoofFlag==true){
            dynamicPrice=38300;
        }
    if(ozelaisFlag == true
        && largeRimFlag==true && noRoofFlag==true){
            dynamicPrice=38800;
    }
    if(ozelaisFlag == true
        && largeRimFlag==true && sunRoofFlag==true){
            dynamicPrice=39600;
    }
    if(champagneMystFlag == true
    && smallRimFlag==true && noRoofFlag==true){
        dynamicPrice=38000;
    }
    if(champagneMystFlag == true
        && smallRimFlag==true && sunRoofFlag==true){
            dynamicPrice=38800;
        }
    if(champagneMystFlag == true
        && largeRimFlag==true && noRoofFlag==true){
            dynamicPrice=39300;
    }
    if(champagneMystFlag == true
        && largeRimFlag==true && sunRoofFlag==true){
            dynamicPrice=40100;
    }
    localStorage.setItem("exteriorPrice", dynamicPrice);
    return dynamicPriceDiv.innerHTML=dynamicPrice;
};

function flagExporter(){
    localStorage.setItem("ardentBlackFlag", ardentBlackFlag);
    localStorage.setItem("excellenceMauveFlag", excellenceMauveFlag);
    localStorage.setItem("ozelaisFlag", ozelaisFlag);
    localStorage.setItem("champagneMystFlag", champagneMystFlag);
    localStorage.setItem("smallRimFlag", smallRimFlag);
    localStorage.setItem("largeRimFlag", largeRimFlag);
    localStorage.setItem("noRoofFlag", noRoofFlag);
    localStorage.setItem("sunRoofFlag", sunRoofFlag);
}

function extImageExporter(){
    carExtImageData = getBase64Image(carExtImageID);
    localStorage.setItem("carExtImageData", carExtImageData);
}










