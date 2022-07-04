//Description
var desc = "A rare event with Mythological Creatures"
console.log(desc);

//Creature and powers
var fireDragon = 100;
var waterSnake = 73;
var lazyPig = 1;
var mythologycalFenix = 120;
var warOpossum = 74;
var Minotaur = 50;
var retardBird = 40;

//setting the scenario
var scenarios = ["waterfallDeath" , "RockMountain" , "EnchantedForest", "KratosThroat"];

var match = {
  id: 1,
  scenario: null,
  winner: null,
  onProcess: false
};


const randomIndex = Math.floor(Math.random() * scenarios.length);
var selectedScenario = scenarios[randomIndex];
console.log(selectedScenario);

//battle training
var train1 = fireDragon > mythologycalFenix;
console.log(train1);

var train2 = waterSnake < lazyPig;
console.log(train2);

var train3 = mythologycalFenix >= waterSnake;
console.log(train3);

var train4 = mythologycalFenix >= waterSnake;
console.log(train4);

var train5 = waterSnake >= waterSnake;
console.log(train5);


//Bonus Creation
var magicApple = 30;
var figPie = 20;

//Power Activected
var stuned5 = 5;
var bananaPeel = -50;

//battle simulations
var lazyPigBonus = lazyPig + magicApple + figPie;
var battleSimulation1 =  lazyPigBonus > retardBird;
console.log("lazyPig can win using bonus add on: " + battleSimulation1);

var warOpossumBonus = warOpossum / stuned5;
console.log(warOpossumBonus);
var battleSimulation2 =  warOpossumBonus > retardBird;
console.log("warOpossum can loss using Powers: " + battleSimulation2);


//Testing 
var setId = true;
var setScenario = true;
var winner = false;

var matchFinished = setId && setScenario && winner;
console.log("Finalizo la match?:" + matchFinished);

var matchStarted = setId || setScenario || winner;
console.log("Inició la match?:" + matchStarted);


// Apart cases
var otherTests = 0;
console.log(otherTests);
console.log(!otherTests);

var otherTests2 = '';
console.log(otherTests2);
console.log(!otherTests2);

var otherTests3 = 'Larnu';
console.log(otherTests3);
console.log(!otherTests3);

var otherTests4 = null;
console.log(otherTests4);
console.log(!otherTests4);

var otherTests5;
console.log(otherTests5);
console.log(!otherTests5);