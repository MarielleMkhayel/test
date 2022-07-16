var configPrice=parseInt(localStorage.getItem("optionsPrice")); //convert string to number
var extDataImage=localStorage.getItem("carExtImageData");
var intDataImage=localStorage.getItem("carIntImageData");
summaryExtImageID=document.getElementById("summary__carExtImage");
summaryIntImageID=document.getElementById("summary__carIntImage");
var dynamicPrice_4=configPrice;

[nameID, colorID, rimID, roofID, seatID, trimID, camID, heatedSeatID, soundID, priceID, codeID]=
[document.getElementById("carname"), document.getElementById("color"),
document.getElementById("rim"), document.getElementById("roof"), document.getElementById("seat"), 
document.getElementById("trim"), document.getElementById("camera"), 
document.getElementById("heatedSeat"), document.getElementById("sound"),
document.getElementById("totalprice"), document.getElementById("configcode")];

/*The flags are treated as strings and not booleans when retrieved from the localStorage*/
[ardentBlackFlag, excellenceMauveFlag, ozelaisFlag, champagneMystFlag, smallRimFlag, largeRimFlag, noRoofFlag, sunRoofFlag]=
[localStorage.getItem("ardentBlackFlag"),localStorage.getItem("excellenceMauveFlag"),localStorage.getItem("ozelaisFlag"),
localStorage.getItem("champagneMystFlag"), localStorage.getItem("smallRimFlag"), localStorage.getItem("largeRimFlag"),
localStorage.getItem("noRoofFlag"), localStorage.getItem("sunRoofFlag")];

var [blackLeatherFlag, beigeLeatherFlag, leatherTrimFlag, woodTrimFlag] = [localStorage.getItem("blackLeatherFlag"),
localStorage.getItem("redLeatherFlag"), localStorage.getItem("leatherTrimFlag"), localStorage.getItem("woodTrimFlag")];

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
    nameID.innerHTML="Aura Luxe 1.6T .............................................................. 36000$";
}


function exteriorDataLoader(){
    if(ardentBlackFlag=="true"){
        colorID.innerHTML="Color: Ardent Black .............................................................. 0$";
    };
    if(excellenceMauveFlag=="true"){
         colorID.innerHTML="Color: Excellence Mauve .............................................................. 1000$";
     };
     if(ozelaisFlag=="true"){
        colorID.innerHTML="Color: Ozelais .............................................................. 1500$";
    };
    if(champagneMystFlag=="true"){
        colorID.innerHTML="Color: Champagne Myst .............................................................. 2000$";
    };
    if(smallRimFlag=="true"){
        rimID.innerHTML="Rim: 18' 5-Spoke .............................................................. 0$";
    };
    if(largeRimFlag=="true"){
        rimID.innerHTML="Rim: 20' Multispoke .............................................................. 1300$";
    };
    if(noRoofFlag=="true"){
        roofID.innerHTML="Roof: No Sunroof .............................................................. 0$";
    };
    if(sunRoofFlag=="true"){
        roofID.innerHTML="Roof: Sunroof .............................................................. 800$";
    };
}

function interiorDataLoader(){
    if(blackLeatherFlag=="true"){
        seatID.innerHTML="Seat: Black Leather .............................................................. 0$";
    };
    if(beigeLeatherFlag=="true"){
        seatID.innerHTML="Seat: Beige Leather .............................................................. 0$";
    };
    if(leatherTrimFlag=="true"){
        trimID.innerHTML="Trim: Color-Coded Leather .............................................................. 0$";
    };
    if(woodTrimFlag=="true"){
        trimID.innerHTML="Trim: Walnut Burr .............................................................. 900$";
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
        soundID.innerHTML="24-Speaker Sound System .............................................................. 1000$";
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
    if(ardentBlackFlag=="true"){
        configCode="BLK" + createdCodeSnippet;
    }
    if(excellenceMauveFlag=="true"){
        configCode="MAU" + createdCodeSnippet;
    }
    if(ozelaisFlag=="true"){
        configCode="OZE" + createdCodeSnippet;
    }
    if(champagneMystFlag=="true"){
        configCode="CHA" + createdCodeSnippet;
    }
    codeID.innerHTML=configCode;

}









