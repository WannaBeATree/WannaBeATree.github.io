// Variable-names are top down 
// html is in front of names, when the varibale/constant can be seen on the website ||| if it is behind the scenes, then no html
// html does not mean the value can be changed from the site, only seen. that way it is easier to find and remember (I hope -> maybe read up on naming conventions?)

// VARIABLES 
// ADDING EVENT LISTER
// EVENT LISTER FUNCTIONS
// CLASSES and their Methods
// FUNCTIONS that give Information
// FUNCTIONS that Display Information
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
class Weapon {
    constructor(name, cut, pierce, blunt) {
      this.name = name;
      this.cut = cut;
      this.pierce = pierce;
      this.blunt = blunt;
      this.dmg = cut + pierce + blunt;
    }
}

class Enemy {
    constructor(name, health, cutres, pierceres, bluntres) {
      this.name = name;
      this.health = health;
      this.cutres = cutres;
      this.pierceres = pierceres;
      this.bluntres = bluntres;
    }
}

// *******************************
// FUNCTIONS that give Information
// *******************************

function getDmgDone(){
    return attackDmg;
}
function pickWeapon(x){
    switch(x) {
        case 1:
            makeFistActive();
          break;
        case 2:
            makeSwordActive();
            break;
        case 3:
            makeSpeerActive();
            break;
        case 4:
            makeHammerActive();  
            break;
        default:
             makeFistActive();
    }
}

// **********************************
// FUNCTIONS that Display Information
// **********************************
function attack(){
    var dmg = Math.floor(Math.random()*(activeWeapon.dmg + 1));
    setDmgDone(getDmgDone() + dmg);  
    htmlStatus.innerHTML = htmlStatus.innerHTML + "<div>" + dmg + "</div>"; 
}
function clearStatus(){
    setDmgDone(0);
    htmlStatus.innerHTML = "";
    activeEnemy = enemyArray[(Math.floor(Math.random()*(enemyArray.length + 1)))];
    displayActiveEnemy(activeEnemy);
}  
function setDmgDone(x){
    attackDmg = x;
    displayDamage(getDmgDone());
}


function displayActiveWeapon(weapon){
    htmlWeaponName.innerHTML = weapon.name;
    htmlDamagePotential.innerHTML = weapon.dmg;
    htmlCutPotential.innerHTML = weapon.cut;
    htmlPiercePotential.innerHTML = weapon.pierce;
    htmlBluntPotential.innerHTML = weapon.blunt;
} 
function displayActiveEnemy(enemy){
    htmlEnemyName.innerHTML = enemy.name;
    htmlEnemyHealth.innerHTML = enemy.health;
    htmlCutResistance.innerHTML = enemy.cutres;
    htmlPierceResistance.innerHTML = enemy.pierceres;
    htmlBluntResistance.innerHTML = enemy.bluntres;
} 
function displayDamage(dmg){
    htmlDamageDone.innerHTML = dmg;
} 

// ******
// Other
// ****** 

function makeFistActive(){
    activeWeapon = weaponArray[0];
    displayActiveWeapon(activeWeapon);
}
function makeSwordActive(){
    activeWeapon = weaponArray[1];
    displayActiveWeapon(activeWeapon);
}
function makeSpeerActive(){
    activeWeapon = weaponArray[2];
    displayActiveWeapon(activeWeapon);
}
function makeHammerActive(){
    activeWeapon = weaponArray[3];
    displayActiveWeapon(activeWeapon);
}

// ***************
// CODE ON STARTUP
// ***************



//making up weapons (for now) ( "name",                 cut,    pierce,  blunt)
let weaponFist = new Weapon(    "Fists",                0,      1,       20);
let weaponSword = new Weapon(   "Sword",                100,    10,      20);
let weaponSpeer = new Weapon(   "Speer",                10,     100,     20);
let weaponHammer = new Weapon(  "Hammer",               0,      20,      200);

let weaponArray = [weaponFist, weaponSword, weaponSpeer, weaponHammer];

//making up enemies (for now) ( "name",         health, cutR,   pierceR, bluntR)
let enemySkeleton = new Enemy("Skeleton",       55,     50,     50,      80);
let enemyFleschGolem = new Enemy("FleschGolem", 500,    5,      10,      60);
let enemyGiantInsect = new Enemy("GiantInsect", 300,    40,     40,      60);

let enemyArray = [enemySkeleton, enemyFleschGolem, enemyGiantInsect];
//How is resitance calculated?
//Idea 1: damage is only applied for the weakest resistance, untill that resistance is no longer the weakest???
//          Example:    very sharp blade will squash a bug (blunt damage) instead of cutting it.
//                      only extremply sharp blade will actualy do cutting damage, instead of blunt.
//                      blunt weapon, will still do some pierce damage on armor.

// making weapons/enemies active
let activeWeapon = weaponArray[0];
let activeEnemy = enemyArray[0];

//display the active weapons/enemies
displayActiveWeapon(activeWeapon);
displayActiveEnemy(activeEnemy);
displayDamage(attackDmg);




