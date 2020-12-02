
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree;
var ground;
var boy, boyImage;
var backgroundIMG;
var stone;
var string;
var mango,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,
mango10;


function preload(){
	boyImage = loadImage("boy.png");
	backgroundIMG = loadImage("background.png");
}
	


function setup() {
	createCanvas(900, 700);


	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground();

	tree = new Tree(700,400,400,500);

	boy = createSprite(200,590,40,40);
	boy.addImage(boyImage);
	boy.scale=0.1;
	
	stone = new Stone(150,500,20);
	console.log(stone.body);

	string = new String(stone.body,{x:150, y:530});

	mango = new Mango(700,340,20);
	mango2 = new Mango(850,320,20);
	mango3 = new Mango(700,230,20);
	mango4 = new Mango(800,240,20);
	mango5 = new Mango(630,260,20);
	mango6 = new Mango(580,340,20);
	mango7 = new Mango(790,310,20);
	mango8 = new Mango(750,180,20);
	mango9 = new Mango(650,320,20);
	mango10 = new Mango(730,280,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backgroundIMG);
  
  stone.display();
  tree.display();
  ground.display();
  mango.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  string.display();

  detectCollision(stone,mango);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);
  detectCollision(stone,mango10);

  tree.depth = stone.depth;
  stone.depth = stone.depth+1;

  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX, y:mouseY});
}

function mouseReleased(){
    string.fly();
}

function detectCollision(stone,mango){
	mangoBodyPosition=mango.body.position;
	stoneBodyPosition=stone.body.position;
	
	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	  if(distance<=mango.r+stone.r){
		  Matter.Body.setStatic(mango.body,false);
	  }
}

function keyPressed(){
	if(keyCode == 32){
			Matter.Body.setPosition(stone.body,{x:100,y:400});
			string.attach(stone.body);
	}
}



