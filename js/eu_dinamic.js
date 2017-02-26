var countries = {
    france: {
        id: "FranceCanvas",
        color: 'red',
        title: 'from France',
    },
    uk: {
        id: 'UKCanvas',
        color: 'green',
        title: "From the United Kingdom",
    },
    italy: {
        id: "ItalyCanvas",
        color: "yellow",
        title: "From Italy",
    },
    holland: {
        id: "HollandCanvas",
        color: "blue",
        title: "From Holland",
    },
}

function createCountry(jqEl, countryName){
    if (countries[countryName]){
        var country = countries[countryName];
        appendCountryCanvas(jqEl, country.id)
        drawCountryCanvas(country.id, country.color, country.title);
    }
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