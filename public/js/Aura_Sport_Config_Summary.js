var configPrice=parseInt(localStorage.getItem("optionsPrice")); //convert string to number
var extDataImage=localStorage.getItem("carExtImageData");
var intDataImage=localStorage.getItem("carIntImageData");
summaryExtImageID=document.getElementById("summary__carExtImage");
summaryIntImageID=document.getElementById("summary__carIntImage");
var dynamicPrice_4=configPrice;

[nameID, colorID, rimID, roofID, seatID, trimID, camID, heatedSeatID, soundID, priceID, codeID]=
[document.getElementById("carname"), document.getElementById("color"),
document.getElementById("rim"), document.getElementById("roof"), document.getElementById("seat"), document.getElementById("trim"),
document.getElementById("camera"), document.getElementById("heatedSeat"), document.getElementById("sound"),
document.getElementById("totalprice"), document.getElementById("configcode")];

/*The flags are treated as strings and not booleans when retrieved from the localStorage*/
[flashBlueFlag, eurosRedFlag, altaWhiteFlag, ardentBlackFlag, whiteRimFlag, blackRimFlag, noRoofFlag, sunRoofFlag]=
[localStorage.getItem("flashBlueFlag"),localStorage.getItem("eurosRedFlag"),localStorage.getItem("altaWhiteFlag"),
localStorage.getItem("ardentBlackFlag"), localStorage.getItem("whiteRimFlag"), localStorage.getItem("blackRimFlag"),
localStorage.getItem("noRoofFlag"), localStorage.getItem("sunRoofFlag")];

var [blackAlcantaraFlag, redAlcantaraFlag, aluTrimFlag, specTrimFlag] = [localStorage.getItem("blackAlcantaraFlag"),
localStorage.getItem("redAlcantaraFlag"), localStorage.getItem("aluTrimFlag"), localStorage.getItem("specTrimFlag")];

var [camFlag, heatedSeatFlag, soundFlag] = [localStorage.getItem("camFlag"),
localStorage.getItem("heatedSeatFlag"), localStorage.getItem("soundFlag")];

function loadHandler(){
    imageLoader();
    nameLoader();
    exteriorDataLoader();
    interiorDataLoader();
    optionsDataLoader();
    priceLoader();
    codeLoader();
}

function imageLoader(){   
    summaryExtImageID.src="data:image/png;base64," + extDataImage;
    summaryIntImageID.src="data:image/png;base64," + intDataImage;
}

function nameLoader(){
    nameID.innerHTML="Aura Sport 2.0T .............................................................. 43000$";
}


function exteriorDataLoader(){
    if(flashBlueFlag=="true"){
        colorID.innerHTML="Color: Flash Blue .............................................................. 0$";
    };
    if(eurosRedFlag=="true"){
         colorID.innerHTML="Color: Euros Red .............................................................. 1000$";
     };
     if(altaWhiteFlag=="true"){
        colorID.innerHTML="Color: Alta White .............................................................. 1000$";
    };
    if(ardentBlackFlag=="true"){
        colorID.innerHTML="Color: Ardent Black .............................................................. 1000$";
    };
    if(whiteRimFlag=="true"){
        rimID.innerHTML="Rim: 18' Silver 6-Spoke .............................................................. 0$";
    };
    if(blackRimFlag=="true"){
        rimID.innerHTML="Rim: 18' Black 6-Spoke .............................................................. 500$";
    };
    if(noRoofFlag=="true"){
        roofID.innerHTML="Roof: No Sunroof .............................................................. 0$";
    };
    if(sunRoofFlag=="true"){
        roofID.innerHTML="Roof: Sunroof .............................................................. 800$";
    };
}

function interiorDataLoader(){
    if(blackAlcantaraFlag=="true"){
        seatID.innerHTML="Seat: Black Alcantara .............................................................. 0$";
    };
    if(redAlcantaraFlag=="true"){
        seatID.innerHTML="Seat: Red Alcantara .............................................................. 300$";
    };
    if(aluTrimFlag=="true"){
        trimID.innerHTML="Trim: Slatted Aluminum .............................................................. 0$";
    };
    if(aluTrimFlag=="true"){
        trimID.innerHTML="Trim: Slatted Aluminum .............................................................. 0$";
    };
    if(specTrimFlag=="true"){
        trimID.innerHTML="Trim: S-Spec Dark Aluminum .............................................................. 500$";
    };
}

function optionsDataLoader(){
    if(camFlag=="true"){
        camID.innerHTML="360 Surround Camera .............................................................. 1300$";
    };
    if(heatedSeatFlag=="true"){
        heatedSeatID.innerHTML="Heated and Ventilated Seats .............................................................. 900$";
    };
    if(soundFlag=="true"){
        heatedSeatID.innerHTML="24-Speaker Sound System .............................................................. 1000$";
    };
}

function priceLoader(){
    priceID.innerHTML=dynamicPrice_4 + "$";
}

function createCode(length) {
    var result='';
    var characters='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength=characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

var createdCodeSnippet=createCode(6);

function codeLoader(){
    if(flashBlueFlag=="true"){
        configCode="BLU" + createdCodeSnippet;
    }
    if(eurosRedFlag=="true"){
        configCode="RED" + createdCodeSnippet;
    }
    if(altaWhiteFlag=="true"){
        configCode="WHI" + createdCodeSnippet;
    }
    if(ardentBlackFlag=="true"){
        configCode="BLK" + createdCodeSnippet;
    }
    codeID.innerHTML=configCode;

}









