
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var plinkos 
function setup() {
  createCanvas(800,700);

  engine = Engine.create();
  world = engine.world;
  
  plinko= new Plinko(200,200,20)

  Engine.run(engine);
  }

function draw() {
  background("black");  
  plinkos.display();
  drawSprites();
}