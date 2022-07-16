var interiorExteriorPrice=parseInt(localStorage.getItem("interiorPrice")); //convert string to number
var dynamicPrice_3=interiorExteriorPrice;

var [dynamicPriceDiv]=[document.getElementById("dynamic_price_options")];

var [camFlag, heatedSeatFlag, soundFlag]=[false, false, false]

function changeHandler(){
     priceChanger();
     flagExporter();
};

function setNoCamFlag(){
    camFlag=false;
    changeHandler();
};

function setCamFlag(){
    camFlag=true;
    changeHandler();
};

function setNoSeatFlag(){
    heatedSeatFlag=false;
    changeHandler();
};

function setSeatFlag(){
    heatedSeatFlag=true;
    changeHandler();
};

function setNoSoundFlag(){
    soundFlag=false;
    changeHandler();
};

function setSoundFlag(){
    soundFlag=true;
    changeHandler();
};

function priceChanger(){
    if(camFlag==false && heatedSeatFlag == false && soundFlag==false){
        dynamicPrice_3=interiorExteriorPrice;
    }
    if(camFlag==false && heatedSeatFlag == true && soundFlag==false){
        dynamicPrice_3=interiorExteriorPrice + 900;
    }
    if(camFlag==false && heatedSeatFlag == false && soundFlag==true){
        dynamicPrice_3=interiorExteriorPrice + 1000;
    }
    if(camFlag==false && heatedSeatFlag == true && soundFlag==true){
        dynamicPrice_3=interiorExteriorPrice + 1900;
    }
    if(camFlag==true && heatedSeatFlag == false && soundFlag==false){
        dynamicPrice_3=interiorExteriorPrice+1300;
    }
    if(camFlag==true && heatedSeatFlag == true && soundFlag==false){
        dynamicPrice_3=interiorExteriorPrice+2200;
    }
    if(camFlag==true && heatedSeatFlag == false && soundFlag==true){
        dynamicPrice_3=interiorExteriorPrice+2300;
    }
    if(camFlag==true && heatedSeatFlag == true && soundFlag==true){
        dynamicPrice_3=interiorExteriorPrice+3200;
    }
    localStorage.setItem("optionsPrice", dynamicPrice_3);
    return dynamicPriceDiv.innerHTML=dynamicPrice_3+"$";
};

function flagExporter(){
    localStorage.setItem("camFlag", camFlag);
    localStorage.setItem("heatedSeatFlag", heatedSeatFlag);
    localStorage.setItem("soundFlag", soundFlag);
};










