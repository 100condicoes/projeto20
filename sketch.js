
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var walls;
var ball;





function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	var options_ground = {isStatic:true}
	ground = Bodies.rectangle(400,690,800,30, options_ground);
    World.add(world, ground);

	Engine.run(engine);

	var options_ball = {restitution:0.5, friction:0.5}
    ball = Bodies.circle(500,100,20, options_ball)
    World.add(world, ball);


}


function draw() {
  rectMode(CENTER);
  background("black");
  

 
  Engine.update(engine);

  rect(ground.position.x, ground.position.y, 800, 30);
  

  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y , 30);

 



}


