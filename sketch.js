var bananaImage, obstacleImage, obstaclegroup, backGround , backImage
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var  bananaGroup
var score = 0;

function preload(){
  
  backImage = loadImage("jungle.jpg")
  
  monkey_running =            loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("stone.png");
 
}



function setup() {
  createCanvas(600, 400);
  
  background = createSprite(0,0,600,600);
  background.addImage(backImage);
  background.scale = 1.29;
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;

ground = createSprite(400,350,10000,10);
  ground.velocityX = -4;
  ground.x = ground.width/2
  console.log(ground.x);
  ground.visible = false;
  


    
  
    obstaclesGroup = createGroup();
  foodGroup = createGroup();
bananaGroup = createGroup();

 
  
}


function draw() {
 
     background.velocityX = -(6 + score/10);

    if (background.x < 0){
      background.x = background.width/2;}
  

 
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  if(keyDown("space")&& monkey.y > 250) {
        monkey.velocityY = -15;

   
  }
   monkey.velocityY = monkey.velocityY + 0.7
  monkey.collide(ground);
  
  if(bananaGroup.isTouching(monkey)){
    
    score = score + 2;
    bananaGroup.destroyEach();
     
     }
  
  if(obstaclesGroup.isTouching(monkey) ){
  monkey.scale = 0.1;
   obstaclesGroup.destroyEach();
    score = 0;
  
}
  else {
      switch(score) {
    case 10 : monkey.scale = 0.12;
      break;
      
    case 20 : monkey.scale = 0.14;
      break;
      
    case 30 : monkey.scale = 0.16;
      break;
      
    case 40 : monkey.scale = 0.18;
      break;
      
      case 50 : monkey.scale = 0.20;
      break;
      default: break;
      
  }
  }
  

  
  Food();
  obstacles();
  drawSprites();
  
    stroke ("white");
  textSize = (20);
  fill ("white");
   text("Score: "+ score, 500,50); 
  
  if(score === 50){
        stroke ("black");
  textSize = (30);
  fill ("black");
   text("Winner Winner ", 300,200);
    
    monkey.changeAnimation("Monkey_01.png");
     background.velocityX = 0;
    obstacle.velocityX = 0;
    banana.velocityX = 0;
    
    
  }
}

function Food(){
  if (frameCount % 80 === 0) {
    var banana = createSprite(600,10,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -(6 + score/10);
    banana.lifetime = 300
    bananaGroup.add(banana)
  }
  
}

function obstacles(){
   if (frameCount % 300 === 0){
   var obstacle = createSprite(600,325,10,40);
   obstacle.velocityX = -(6 + score/10);
     obstacle.addImage(obstaceImage)
     
   obstacle.scale = 0.12;
    obstacle.lifetime = 300;
  
    obstaclesGroup.add(obstacle);
  
  
}


}