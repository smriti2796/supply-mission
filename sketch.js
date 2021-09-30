var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,bucketBottom,bucketBottomBody,bucketLeftBody,bucketRightBody,bucketRight,bucketLeft;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-25, width,50);
	groundSprite.shapeColor=color(101,67,33)
	
	bucketBottom = createSprite(400,650,200,20);
	bucketLeft = createSprite(310,600,20,100);
	bucketRight = createSprite(490,600,20,100);



	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.7, isStatic:true});
	World.add(world, packageBody);

	bucketLeftBody = Bodies.rectangle(310,600,20,100,{isStatic:true});
	World.add(world, bucketLeftBody);

	bucketRightBody = Bodies.rectangle(490,600,20,100,{isStatic:true});
	World.add(world, bucketRightBody);

	bucketBottomBody = Bodies.rectangle(400,650,200,20,{isStatic:true});
	World.add(world, bucketBottomBody);




	bucketBottom = createSprite(400,650,200,20);
	bucketLeft = createSprite(310,600,20,100);
	bucketRight = createSprite(490,600,20,100);

	bucketBottom.shapeColor = "red";
	bucketLeft.shapeColor = "red";
	bucketRight.shapeColor = "red";

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  helicopterSprite.x = packageBody.position.x;

  helicopterSprite.velocityX = 0;
  packageSprite.x= packageBody.position.x ;
  packageSprite.y= packageBody.position.y ;

  bucketLeft.x = bucketLeftBody.position.x;
  bucketLeft.y = bucketLeftBody.position.y;

  bucketRight.x = bucketRightBody.position.x;
  bucketRight.y = bucketRightBody.position.y;

  bucketBottom.x = bucketBottomBody.position.x;
  bucketBottom.y = bucketBottomBody.position.y;

  

  if (keyDown(LEFT_ARROW)) {
	
	var translation= {x:-10,y:0};
	Matter.Body.translate(packageBody,translation);
  }
 
  if (keyDown(RIGHT_ARROW)) {
	
	var translation= {x:10,y:0};
	Matter.Body.translate(packageBody,translation);
  }

  
  drawSprites();
}

function keyPressed() {
   if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody, false);
   }
}




