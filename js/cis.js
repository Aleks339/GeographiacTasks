var countries = {
    kazachstan: {
        id: "KazCanvas",
        color: 'red',
        title: 'from Kazakhstan',
        stamps: ['kaz1', 'kaz2', 'kaz3'],
    },
    azerbaijan: {
        id: 'AzerCanvas',
        color: 'green',
        title: "From Azerbaijan",
        stamps: ['azerb1', 'azerb2', 'azerb3'],
    },
    belarus: {
        id: "BelCanvas",
        color: "yellow",
        title: "From Belarus",
        stamps: ['bel1', 'bel2', 'bel3', 'bel4', 'bel5'],
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
    azerb1:  {
        src: 'img/cis/azerb1.jpg',
        class1: 'azerb-drop',
        id: 'azerb1',
        alt: 'Azerbaijan 1',
    },
    azerb2:  {
        src: 'img/cis/azerb2.jpg',
        class1: 'azerb-drop',
        id: 'azerb2',
        alt: 'Azerbaijan 2',
    },
    azerb3:  {
        src: 'img/cis/azerb3.jpg',
        class1: 'azerb-drop',
        id: 'azerb3',
        alt: 'Azerbaijan 3',
    },
    azerb4:  {
        src: 'img/cis/azerb4.jpg',
        class1: 'azerb-drop',
        id: 'azerb4',
        alt: 'Azerbaijan 4',
    },
    kaz1:  {
        src: 'img/cis/kaz1.jpg',
        class1: 'kaz-drop',
        id: 'kaz1',
        alt: 'Kazachstan 1',
    },
    kaz2:  {
        src: 'img/cis/kaz2.jpg',
        class1: 'kaz-drop',
        id: 'kaz2',
        alt: 'Kazachstan 2',
    },
    kaz3:  {
        src: 'img/cis/kaz3.jpg',
        class1: 'kaz-drop',
        id: 'kaz3',
        alt: 'Kazachstan 3',
    },
    bel1:  {
        src: 'img/cis/bel1.jpg',
        class1: 'bel-drop',
        id: 'bel1',
        alt: 'Belarus 1',
    },
    bel2:  {
        src: 'img/cis/bel2.jpg',
        class1: 'bel-drop',
        id: 'bel2',
        alt: 'Belarus 2',
    },
    bel3:  {
        src: 'img/cis/bel3.jpg',
        class1: 'bel-drop',
        id: 'bel3',
        alt: 'Belarus 3',
    },
    bel4:  {
        src: 'img/cis/bel4.jpg',
        class1: 'bel-drop',
        id: 'bel4',
        alt: 'Belarus 4',
    },
    bel5:  {
        src: 'img/cis/bel5.jpg',
        class1: 'bel-drop',
        id: 'bel5',
        alt: 'Belarus 5',
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