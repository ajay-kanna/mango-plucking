const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var Juno
var ground
var tree, treeImg
var stone
var catapult
var boy, boyImg

var mango1
var mango2
var mango3
var mango4
var mango5
var mango6
var mango7
var mango8
var mango9
var mango10
var mango11
var mango12
var mango13
var mango14

function preload() {
boyImg = loadImage("sprites/boy.png")
treeImg = loadImage("sprites/tree.png")
}

function setup() {
	createCanvas(1200, 550);

	engine = Engine.create();
	world = engine.world;

	boy = createSprite(300,420,20,20)
	boy.addImage(boyImg)
	boy.scale = 0.12	

	tree = createSprite(950,265,20,20)
	tree.addImage(treeImg)
	tree.scale = 0.40	


	//Create the Bodies Here.
	ground = new Ground(400, 500, 2000, 30)
	//tree = new Tree(1000,300,450,500)
	stone = new Stone(200,350,360)
	catapult = new Chain(stone.body,{x:235, y:350})
	
	
	mango1 = new Mango(820,120)
	mango2 = new Mango(850,50)
	mango3 = new Mango(900,200)
	mango4 = new Mango(960,100)
	mango5 = new Mango(970,30)
	mango6 = new Mango(1050,100)
	mango7 = new Mango(1100,100)
	
	mango8 = new Mango(750,150)
	mango9 = new Mango(830,200)
	mango10 = new Mango(890,120)
	mango11 = new Mango(945,175)
	mango12 = new Mango(980,180)
	mango13 = new Mango(1050,150)
	mango14 = new Mango(1120,200)
	



	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background(255);

	drawSprites();

	ground.display()
	//tree.display()
	stone.display()
	catapult.display()
	
	
	mango1.display()
	mango2.display()
	mango3.display()
	mango4.display()
	mango5.display()
	mango6.display()
	mango7.display()
	mango8.display()
	mango9.display()
	mango10.display()
	mango11.display()
	mango12.display()
	mango13.display()
	mango14.display()

	stone.debug = true;
	//stroke("green")


	detectCollision(stone, mango1)
	detectCollision(stone, mango2)
	detectCollision(stone, mango3)
	detectCollision(stone, mango4)
	detectCollision(stone, mango5)
	detectCollision(stone, mango6)
	detectCollision(stone, mango7)
	detectCollision(stone, mango8)
	detectCollision(stone, mango9)
	detectCollision(stone, mango10)
	detectCollision(stone, mango11)
	detectCollision(stone, mango12)
	detectCollision(stone, mango13)
	detectCollision(stone, mango14)

}
function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    catapult.fly();
}

function keyPressed(){
	if (keyCode === 32){
		Matter.Body.setPosition(stone.body, {x:235, y:420})
		//launcherObject.attach(stone.body)
		catapult.attach(stone.body)
	}
}

function detectCollision(Lstone, Lmango){
	mangoBodyPosition = Lmango.body.position
	stoneBodyPosition = Lstone.body.position

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	console.log(distance);
	if(distance<=60){
		Matter.Body.setStatic(Lmango.body, false)
		console.log("hello")
	}
}
