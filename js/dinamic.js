var countries = {
    brazil: {
        id: "BrazCanvas",
        color: 'red',
        title: 'from Brazil',
        stamps: ['brazilian1', 'brazilian2', 'brazilian3', 'brazilian4', 'brazilian5', 'brazilian6'],
    },
    india: {
        id: 'IndCanvas',
        color: 'green',
        title: "From India",
        stamps: ['india1', 'india2', 'india3', 'india4'],
    },
    china: {
        id: "ChiCanvas",
        color: "yellow",
        title: "From China",
        stamps: ['china1', 'china2', 'china3', 'china4'],
    },
    africa: {
        id: "AfrCanvas",
        color: "blue",
        title: "From South Africa",
        stamps: ['africa1', 'africa2', 'africa3', 'africa4'],
    },
    russia: {
        id: "RusCanvas",
        color: "brown",
        title: "From Russia",
        stamps: ['russia1', 'russia3'],
    },
}

function createCountry(jqEl, jqElStampsStage, countryName){
    if (countries[countryName]){
        var country = countries[countryName];
        appendCountryCanvas(jqEl, country.id)
        drawCountryCanvas(country.id, country.color, country.title);
        $.each(country.stamps, function( index, value ) {
              createPostStamp(jqElStampsStage, value);
        });
    }
}
//random envelope
function randomEnvelope(countryArray){
    var randomNumber = Math.random();
    var countryIndex  = Math.floor(randomNumber * countryArray.length);

    var randomKey    = countryArray[countryIndex];
    // This will course this will return the value of the randomKey
    // instead of a fresh random value
    var randomValue  = countries[randomKey]; 
    return randomKey;
}



/**
 * this function draws canvas envelope
 */
function drawCountryCanvas (idCanvas, grdColor1, fillText){
    var c = document.getElementById(idCanvas);//different vars

    if (c){
       var ctx = c.getContext("2d");
        // Create gradient
        var grd = ctx.createRadialGradient(100,100,0,200,200,200);
        grd.addColorStop(0, grdColor1);//different colors
        grd.addColorStop(1, "white");//different colors
        // Fill with gradient
        ctx.fillStyle = grd;
        ctx.fillRect(0, 0, 400, 400);
        ctx.moveTo(0, 0);
        ctx.lineTo(200, 200);
        ctx.stroke();
        ctx.moveTo(200, 200);
        ctx.lineTo(400, 0);
        ctx.stroke();
        ctx.moveTo(50, 300);
        ctx.lineTo(350, 300);
        ctx.stroke();    
        ctx.font = "30px Arial";
        ctx.fillStyle = "blue";
        ctx.textAlign = "center";
        ctx.fillText("To my dear friend", 195, 290); 
        ctx.moveTo(50, 350);
        ctx.lineTo(350, 350);
        ctx.stroke();
        ctx.font = "30px Arial";
        ctx.fillStyle = "blue";
        ctx.textAlign = "center";
        ctx.fillText(fillText, 195, 340);  //different titles
    }
}

function appendCountryCanvas(jqEl, idCanvas){
   jqEl.append('<div class = "col-sm-6 col-xs-12"><canvas id="'+idCanvas+'" width="400" height="400" class = "envelope"></canvas></div>')
}

var postSpamps = {
    brazilian1:  {
        src: 'img/postcards/brazil1.jpg',
        class1: 'braz-drop',
        id: 'brazil1',
        alt: 'Brazilian Bird',
    },
    india1:  {
        src: 'img/postcards/india1.jpg',
        class1: 'ind-drop',
        id: 'India1',
        alt: 'India1',
    },
    russia1:  {
        src: 'img/postcards/russia1.jpg',
        class1: 'rus-drop',
        id: 'Russia1',
        alt: 'Russia1',
    },
    africa1:  {
        src: 'img/postcards/africa1.jpg',
        class1: 'afr-drop',
        id: 'Africa1',
        alt: 'Africa1',
    },
    china1:  {
        src: 'img/postcards/china1.jpg',
        class1: 'chin-drop',
        id: 'China1',
        alt: 'China1',
    },
    brazilian2:  {
        src: 'img/postcards/brazil2.jpg',
        class1: 'braz-drop',
        id: 'brazil2',
        alt: 'Brazil2',
    },
    brazilian3:  {
        src: 'img/postcards/brazil3.jpg',
        class1: 'braz-drop',
        id: 'brazil3',
        alt: 'brazil3',
    },
    india2:  {
        src: 'img/postcards/india2.jpg',
        class1: 'ind-drop',
        id: 'India2',
        alt: 'India2',
    },
    africa2:  {
        src: 'img/postcards/africa2.jpg',
        class1: 'afr-drop',
        id: 'Africa2',
        alt: 'Africa2',
    },
    china2:  {
        src: 'img/postcards/china2.jpg',
        class1: 'chin-drop',
        id: 'China2',
        alt: 'China2',
    },
    brazilian4:  {
        src: 'img/postcards/brazil4.jpg',
        class1: 'braz-drop',
        id: 'brazil4',
        alt: 'Brazilian Bird',
    },
    india3:  {
        src: 'img/postcards/india3.jpg',
        class1: 'ind-drop',
        id: 'India3',
        alt: 'India3',
    },
    russia2:  {
        src: 'img/postcards/russia2.jpg',
        class1: 'rus-drop',
        id: 'Russia2',
        alt: 'Russia2',
    },
    africa3:  {
        src: 'img/postcards/africa3.jpg',
        class1: 'afr-drop',
        id: 'Africa3',
        alt: 'Africa3',
    },
    china3:  {
        src: 'img/postcards/china3.jpg',
        class1: 'chin-drop',
        id: 'China3',
        alt: 'China3',
    },
    brazilian5:  {
        src: 'img/postcards/brazil5.jpg',
        class1: 'braz-drop',
        id: 'brazil5',
        alt: 'Brazilian5',
    },
    brazilian6:  {
        src: 'img/postcards/brazil6.jpg',
        class1: 'braz-drop',
        id: 'brazil6',
        alt: 'brazil6',
    },
    india4:  {
        src: 'img/postcards/india4.jpg',
        class1: 'ind-drop',
        id: 'India4',
        alt: 'India4',
    },
    africa4:  {
        src: 'img/postcards/africa4.jpg',
        class1: 'afr-drop',
        id: 'Africa4',
        alt: 'Africa4',
    },
    china4:  {
        src: 'img/postcards/china4.jpg',
        class1: 'chin-drop',
        id: 'China4',
        alt: 'China4',
    },
}

//random envelope
function randomStamp(stampArray){
    var randomNumber = Math.random();
    var stampIndex  = Math.floor(randomNumber * stampArray.length);

    var randomKey    = stampArray[stampIndex];
    // This will course this will return the value of the randomKey
    // instead of a fresh random value
    var randomValue  = postSpamps[randomKey]; 
    return randomKey;
}

function createPostStamp(jqEl, stampName){
    if (postSpamps[stampName]){
        var postStamp = postSpamps[stampName];
        appendPostSpamps(jqEl, postStamp.src, postStamp.class1, postStamp.id, postStamp.alt);
        drawPostStamp ( postStamp.src, postStamp.class1, postStamp.id, postStamp.alt );
    }
}

function appendPostSpamps(jqEl, srcPostSpamps,  classPostSpamps, idPostStamps, altPostSpamps){
   $(jqEl).append('<img src ="'+srcPostSpamps+'" class="'+ classPostSpamps+' ui-widget-content" id = "'+idPostStamps+'" alt = "'+altPostSpamps+'" width = "100" height = "100">');
}

function drawPostStamp (idPostStamps, altPostSpamps, srcPostSpamps, classPostSpamps ){
    var stampId = document.getElementById(idPostStamps);
    if (stampId){
        stampId.alt = altPostSpamps;
        stampId.src = srcPostSpamps;
        stampId.class1 = classPostSpamps;
    }
}