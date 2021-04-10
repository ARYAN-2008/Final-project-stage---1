
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint

var engine, world;

var ball, ground, finish;




function setup() {
  createCanvas(1550, 760);
  engine = Engine.create();
  world = engine.world;

  ball = new Player(100, 200, 100, 100);
  ground = new Ground(775, 700, 1550, 30);
  finish = new Finish(1400, 300, 100, 100)
}

function draw() {
  background("lightBlue");
  textSize(13); 
  fill("black");
  text(mouseX+","+mouseY, mouseX, mouseY)
  Engine.update(engine);

  ball.display();
  ground.display();
  finish.display();
  

}


