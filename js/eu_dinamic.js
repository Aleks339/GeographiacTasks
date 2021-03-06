var countries = {
    france: {
        id: "FrCanvas",
        color: 'red',
        title: 'from France',
        stamps: ['fr1', 'fr2'],
    },
    uk: {
        id: 'UKCanvas',
        color: 'green',
        title: "From the United Kingdom",
        stamps: ['uk1', 'uk2', 'uk3', 'uk4'],
    },
    italy: {
        id: "ItCanvas",
        color: "yellow",
        title: "From Italy",
        stamps: ['it1', 'it2'],
    },
    holland: {
        id: "HollCanvas",
        color: "blue",
        title: "From Holland",
        stamps: ['holl1', 'holl2'],
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
    uk1:  {
        src: 'img/eu/uk1.jpg',
        class1: 'uk-drop',
        id: 'uk1',
        alt: 'uk1',
    },
    uk2:  {
        src: 'img/eu/uk2.jpg',
        class1: 'uk-drop',
        id: 'uk2',
        alt: 'uk2',
    },
    uk3:  {
        src: 'img/eu/uk3.jpg',
        class1: 'uk-drop',
        id: 'uk3',
        alt: 'uk3',
    },
    uk4:  {
        src: 'img/eu/uk4.jpg',
        class1: 'uk-drop',
        id: 'uk4',
        alt: 'uk4',
    },
    fr1:  {
        src: 'img/eu/france1.jpg',
        class1: 'fr-drop',
        id: 'fr1',
        alt: 'fr1',
    },
    fr2:  {
        src: 'img/eu/france1.jpg',
        class1: 'fr-drop',
        id: 'fr2',
        alt: 'fr2',
    },
    it1:  {
        src: 'img/eu/italy1.jpg',
        class1: 'it-drop',
        id: 'it1',
        alt: 'it1',
    },
    it2:  {
        src: 'img/eu/italy1.jpg',
        class1: 'it-drop',
        id: 'it2',
        alt: 'it2',
    },
    holl1:  {
        src: 'img/eu/holland1.jpg',
        class1: 'holl-drop',
        id: 'holl1',
        alt: 'holl1',
    },
    holl2:  {
        src: 'img/eu/holland2.jpg',
        class1: 'holl-drop',
        id: 'holl2',
        alt: 'holl2',
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