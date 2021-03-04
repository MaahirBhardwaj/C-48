var gameState=0;
var playerCount,database,form,player,game;
var player1,player2,players;
var player1image,player2image;
var bg
var allplayers
var p1punch,p2punch;
var punch1,punch2;
var p1f, p2f;
var fall1,fall2; 
var p1score;
var p2score;

function preload() {
player1image=loadImage("p1.PNG");
player2image=loadImage("p2.PNG");
bg=loadImage("backgroud.jpg");
p1punch=loadImage("p1 punch.png");
p2punch=loadImage("p2 puch.png");
p1f=loadImage("p1fall.png");
p2f=loadImage("p2fall.png");

}

function setup() {
  createCanvas(displayWidth-20,displayHeight-30);
  database=firebase.database();
  game=new Game();
  game.getState();
  game.start();
}

function draw() {
  if(playerCount===2){
    game.update(1)
  }
  if(gameState===1){
    clear();
    game.play();
  }
}