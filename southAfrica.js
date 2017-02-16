//South Africa
var c = document.getElementById("AfrCanvas");
var ctx = c.getContext("2d");
// Create gradient
var grd=ctx.createRadialGradient(100,100,0,200,200,200);
grd.addColorStop(0,"lightSkyBlue");
grd.addColorStop(1,"white");
// Fill with gradient
ctx.fillStyle=grd;
ctx.fillRect(0, 0, 400, 400);
ctx.moveTo(0, 0);
ctx.lineTo(200, 200);
ctx.stroke();
ctx.moveTo(200, 200);
ctx.lineTo(400, 0);
ctx.stroke();
ctx.moveTo(50,300);
ctx.lineTo(350,300);
ctx.stroke();    
ctx.font = "30px Arial";
ctx.fillStyle = "blue";
ctx.textAlign = "center";
ctx.fillText("To my dear friend",195,290); 
ctx.moveTo(50,350);
ctx.lineTo(350,350);
ctx.stroke();
ctx.font = "30px Arial";
ctx.fillStyle = "blue";
ctx.textAlign = "center";
ctx.fillText("From South Africa",195,340);