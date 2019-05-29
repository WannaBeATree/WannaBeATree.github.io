// Variable-names are top down 
// html is in front of names, when the varibale/constant can be seen on the website ||| if it is behind the scenes, then no html
// html does not mean the value can be changed from the site, only seen. that way it is easier to find and remember (I hope -> maybe read up on naming conventions?)

// VARIABLES 
// ADDING EVENT LISTER
// EVENT LISTER FUNCTIONS
// CLASSES and their Methods
// FUNCTIONS that give Information
// Other
// CODE ON STARTUP

// **********
// VARIABLES 
// ********** 

var htmlWeaponName = document.querySelector("#weaponName");
var htmlDamagePotential = document.querySelector("#damagePotential");
var htmlCutPotential = document.querySelector("#cut");
var htmlPiercePotential = document.querySelector("#pierce");
var htmlBluntPotential = document.querySelector("#blunt");

var htmlEnemyName = document.querySelector("#enemyName");
var htmlEnemyHealth = document.querySelector("#enemyHealth");
var htmlCutResistance = document.querySelector("#cutRes");
var htmlPierceResistance = document.querySelector("#pierceRes");
var htmlBluntResistance = document.querySelector("#bluntRes");

var htmlStatus = document.querySelector("#status");
var htmlDamageDone = document.querySelector("#damageDone");
var attackDmg = 0;
// *******************
// ADDING EVENT LISTER
// ******************* 


// **********************
// EVENT LISTER FUNCTIONS
// ********************** 


// **************************
// CLASSES and their Methods
// **************************

// *******************************
// FUNCTIONS that give Information
// *******************************

// ******
// Other
// ****** 
function setDmgDone(x){
    attackDmg = x;
    htmlDamageDone.innerHTML = getDmgDone();
}
function getDmgDone(){
    return attackDmg;
}
function pickWeapon(){
  //  picked.innerHTML= "jooo";
}
function attack(){
    var dmg = Math.floor(Math.random()*(DamageSum+1));
    setDmgDone(getDmgDone() + dmg);  
    htmlStatus.innerHTML = htmlStatus.innerHTML + "<div>" + dmg + "</div>"; 
}
function clearStatus(){
    setDmgDone(0);
    htmlStatus.innerHTML = "";
}  
// ***************
// CODE ON STARTUP
// ***************

//making up stuff for now
var weaponName = "Fists"; 
var cutPotential = 0;
var piercePotential = 1;
var bluntPotential = 10;
var DamageSum = cutPotential + piercePotential + bluntPotential;

var enemyName = "Skeleton"; 
var enemyHealth = 55; 
var cutRes = 50;
var pierceRes = 50;
var bluntRes = 0;

//display the stuff
htmlWeaponName.innerHTML = weaponName;
htmlDamagePotential.innerHTML = DamageSum;
htmlCutPotential.innerHTML = cutPotential;
htmlPiercePotential.innerHTML = piercePotential;
htmlBluntPotential.innerHTML = bluntPotential;

htmlEnemyName.innerHTML = enemyName;
htmlEnemyHealth.innerHTML = enemyHealth;
htmlCutResistance.innerHTML = cutRes;
htmlPierceResistance.innerHTML = pierceRes;
htmlBluntResistance.innerHTML = bluntRes;

htmlDamageDone.innerHTML = attackDmg;


