    var allLegendaries = ["./img/Bloodhound.png", "./img/Hangtight.png", "./img/Lifeline.png", "./img/Pathfinder2e.png",
     "./img/Octane.png", "./img/Wraith.png", "./img/Bangthedoor.png", "./img/Toxic.png", "./img/Mirage.png", 
     "./img/NotPicked.png"];
    var leg = []
    leg.length = 3;
    var map = []
    map.length = 3;

    function getRolling(){
      /*roll for unique legendaries*/
      for (let i = 0; i < leg.length; i++) {
        do {
          var y = rolldX(9);
        } while (doesXcontainYorZ(leg, y) || doesYcontainGrayLeg(y, i)); /*y is guaranteed to not be in leg AND not gray*/

        leg[i] = y;   
        document.getElementById("leg"+i).value = leg[i];
        document.getElementById("nr"+i).src = allLegendaries[leg[i]-1];
      } 
      /*roll for unique map numbers*/
      for (let j = 0; j < map.length; j++) {
        do {
          var z = rolldX(20);
        } while (doesXcontainYorZ(map, z)); /*z is guaranteed to not be in map*/

        map[j] = z;   
        document.getElementById("map"+j).value = map[j];
      } 

    }

    var allGray = [[0,1,2],[0,1,2],[0,1,2]]; // 5, 8, 9


    function togglegray(x){
      var id1 = x.substring(2, 3);
      var id2 = x.substring(3, 4);

      if (document.getElementById(x).classList.contains("grayout")) {
        var index = allGray[id1].indexOf(Number(id2));
        if (index > -1) {
           allGray[id1].splice(index, 1);
        }
      } else {
        allGray[id1].push(Number(id2));
        allGray[id1].sort();
      }
      document.getElementById(x).classList.toggle("grayout");
    }

    function rolldX(x){
      return Math.floor((Math.random() * x) + 1);
    }

    function doesXcontainYorZ(x, y){
      for (let i = 0; i < x.length; i++) {
        if (x[i] === y) {
          return true;
        }
      }
      return false;
    }


//allGray = [[0,1,2],[0,1,2],[0,1,2]];  5, 8, 9

    function doesYcontainGrayLeg(y, i){
      
      var numberOfLegend = [5, 8, 9]; 
      if (allGray[i].indexOf(numberOfLegend.indexOf(y)) > -1) {
        return true;
      }

      return false;
    }

    /*********************************************** /
     *           BACKGROUND COLOR STUFF            * /
     ************************************************/
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelectorAll("button")[1];


function setGradient(){
	body.style.background = "linear-gradient(to right, " 
		+ color1.value 
		+ ", " 
		+ color2.value 
		+ ")";
}

function rgbToHex(color) {
    color = ""+ color;
    if (!color || color.indexOf("rgb") < 0) {
        return;
    }

    if (color.charAt(0) == "#") {
        return color;
    }

    var nums = /(.*?)rgb\((\d+),\s*(\d+),\s*(\d+)\)/i.exec(color),
        r = parseInt(nums[2], 10).toString(16),
        g = parseInt(nums[3], 10).toString(16),
        b = parseInt(nums[4], 10).toString(16);

    return "#"+ (
        (r.length == 1 ? "0"+ r : r) +
        (g.length == 1 ? "0"+ g : g) +
        (b.length == 1 ? "0"+ b : b)
    );
}
function randomNumber(x){
	return (Math.floor(Math.random()*x)+1);
}

function randomColor(){
	var r = randomNumber(255);
	var g = randomNumber(255);
	var b = randomNumber(255);
	return "rgb(" + r + ", " + g + ", " + b +")";
}

function changeBG(){
	var random1 = randomColor();
	var random2 = randomColor();
	
	body.style.background = "linear-gradient(to right, "+ random1 + ", " + random2 +")";
	color1.value = rgbToHex(random1);
	color2.value = rgbToHex(random2);
}
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
button.addEventListener("click", changeBG);