const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint


function preload(){
bg=loadImage("snow2.jpg")
}

function setup() {
  engine = Engine.create();
    world = engine.world;
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  snow1=new Snow(400,0,10,10) 

}


function draw() {  
  background(bg); 
  Engine.update(engine);
  snow1.display() 
  drawSprites();
}

