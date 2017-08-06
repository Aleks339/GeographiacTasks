var app = angular.module('geoLoc', []);
app.controller('stampsController', function($scope){
    $scope.countries = {
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
    $scope.drawCountryCanvas = function (idCanvas, grdColor1, fillText){
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
});