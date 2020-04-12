var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var cloudImage,cloudGroup;
var plants,plant1,plant2,plant3,plant4,plant5,plant6,plantsGroup;

var score = 0;

var highScore = 0;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  
  cloudImage = loadImage("cloud.png");
  
  plant1 = loadImage("obstacle1.png");
  
    plant6 = loadImage("obstacle6.png");
  
    plant2 = loadImage("obstacle2.png");
  
    plant3 = loadImage("obstacle3.png");
  
    plant4 = loadImage("obstacle4.png");
  
    plant5 = loadImage("obstacle5.png");
  
}

function setup() {
  createCanvas(600, 200);
  
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -2;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  cloudGroup = new Group ();
  
  plantsGroup = new Group ();
  
}

function draw() {
  background(180);
  
  console.log(score);
  
  spawnClouds();
  
  spawnPlants();
  
  if(keyDown("space")) {
    trex.velocityY = -10;
  }
  
     score = score + Math.round(getFrameRate()/60);
  
  fill("black");
  text("Score = "+ score,200,50);
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  
  drawSprites();
}

function spawnClouds(){
  if(frameCount % 60 === 0){
    var cloud = createSprite(600,random(50,350),10,10) ;
    cloud.addImage(cloudImage);
    cloud.lifetime = 225;
    cloud.velocityX = -5;
    cloud.scale = 0.5;
    cloud.depth = trex.depth 
    trex.depth = trex.depth + 1;
    cloudGroup.add(cloud);
  }
}

function spawnPlants(){
  if(frameCount % 60 === 0){
    var plant = createSprite(600,165,10,10) ;
    plant.lifetime = 225;
    plant.velocityX = -5;
    plant.scale = 0.5;
    var rand = Math.round(random(1,6));
    switch(rand){
      case 1 : plant.addImage(plant1);
        break;
        
        case 2 : plant.addImage(plant2);
        break;
        
        case 3 : plant.addImage(plant3);
        break
        
        case 4 : plant.addImage(plant4);
        break;
        
        case 5 : plant.addImage(plant5);
        break;
        
        case 6 : plant.addImage(plant6);
        break;
        
        default:break;
    }
    plantsGroup.add(plant);
  }
}
