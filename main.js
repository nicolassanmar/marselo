
var marselo,c90;
var first = true;


function preload(){
  c90 = loadSound('c90.mp3');
  marselo = loadImage('marselo.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);


}

function draw() {
  background(0);
  if (!first){
    image(marselo,windowWidth/2,windowHeight/2);
  }
}

function mousePressed(){
  if (first){
    c90.play();
    first = false;
  }
  
}