var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;

var track, car1_img, car2_img, car3_img, car4_img;

var canvas;
var backgroundImage, track, car1_img, car2_img;
var fireAuth, db;
var game, form, login, join;
var secret_word;
var Back_Img;




function preload(){
  Back_Img = loadImage("Shiperio/Back.jpg");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight- -30);
  database = firebase.database();

  db = firebase.database();
  form = new Form();
  game = new Game();
  creategame = new Login();
  login = new Join();
  player = new Player();

  car1 = createSprite(200,100);
  car1.addImage("Back",Back_Img);
  car1.scale = 0.1;

  car2 = createSprite(450,100);
  car2.addImage("Back",Back_Img);
  car2.scale = 0.1;

  car3 = createSprite(700,100);
  car3.addImage("Back",Back_Img);
  car3.scale = 0.1;

  car4 = createSprite(950,100);
  car4.addImage("Back",Back_Img);
  car4.scale = 0.1;

  cars = [car1, car2, car3, car4];

  game.getState();
  game.start();
}


function draw(){
  background(rgb(255,255,255));
  if(playerCount === 3){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    background("Green");
    login.greeting2.hide();
    creategame.greeting2.hide();
    login.greeting.hide();
    creategame.greeting.hide();
    form.logo.hide();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }

}


// var canvas;
// var backgroundImage, track, car1_img, car2_img;
// var fireAuth, db;
// var game, welcome, teacher, student;
// var secret_word;
// var player, allPlayers;
// var gameState = null;
// var playerCount;
// function preload() {
//   // backgroundImage = loadImage("./assets/bg.jpg");
//   // track = loadImage("./assets/track.jpg");
//   // car1_img = loadImage("./assets/car1.png");
//   // car2_img = loadImage("./assets/car2.png");
// }

// function setup() {
//   canvas = createCanvas(displayWidth, displayHeight);
//   // fireAuth = firebase.auth();
  // db = firebase.database();
  // welcome = new Welcome();
  // game = new Game();
  // creategame = new Login();
  // login = new Join();
  // player = new Player();

//   car1 = createSprite(width / 2, 200);
//   // car1.addImage("car1", car1_img);
//   car2 = createSprite(width - 300, 200);
//   // car2.addImage("car2", car2_img);

//   cars = [car1, car2];
// }

// function draw() {
//   background(255,255,255);
//   if (gameState === null || gameState === 0) {
//     game.start();
//   }
//   if (playerCount === 2) {
//     game.update(1);
//   }

//   if (gameState === 1) {
//     clear();
//     login.greeting.hide();
//     login.greeting2.hide();
//     login.playButton.hide();

//     creategame.greeting.hide();
//     creategame.greeting2.hide();
//     creategame.playButton.hide();
//     creategame.secretWord.hide();

//     game.play();
//   }
//   if (gameState === 2) {
//     game.end();
//   }
// }

// function windowResized() {
//   resizeCanvas(displayWidth, displayHeight);
// }

