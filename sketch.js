const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var divisions=[];
var plinkos=[];
var particles=[];

var divisionHeight=300;
function setup() {
  createCanvas(400,620);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine)

  ground = new Boundary(200,617,400,10)
  l1 = new Boundary(5,310,10,620)
  r1 = new Boundary(395,310,10,620)

  for (var k = 0; k <=width; k = k + 80) 
  { divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight)); } 
  for (var j = 75; j <=width; j=j+50) { plinkos.push(new Plinko(j,75)); } 
  for (var j = 50; j <=width-10; j=j+50) { plinkos.push(new Plinko(j,175)); } 
  for (var j = 75; j <=width; j=j+50) { plinkos.push(new Plinko(j,275)); } 
  for (var j = 50; j <=width-10; j=j+50) 
  { plinkos.push(new Plinko(j,375)); }


}

function draw() {
  background(0); 
  Engine.update(engine);
  ground.display();
  l1.display();
  r1.display();
  for (var i = 0; i < plinkos.length; i++) 
  { plinkos[i].display(); } 
  if(frameCount%60===0)
  { particles.push(new Particle(random(width/2-30, width/2+30), 10,10)); } 
  for (var j = 0; j < particles.length; j++) 
  { particles[j].display(); } 
  for (var k = 0; k < divisions.length; k++) 
  { divisions[k].display(); }

  drawSprites();
}