var database;
var gameState = 0;
var playerCount;
var form,player,game;
var playerCountP, gameStateP;
var allPlayers;
var distance = 0;
var car1, car2, car3, car4;
var cars;

function setup(){
    createCanvas(displayWidth-20,displayHeight-50);

    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
    }

function draw(){
    background("white");

    if(playerCountP===4){
        game.update(1);
    }

    if(gameStateP===1){
        clear();
        game.play();
    }
}