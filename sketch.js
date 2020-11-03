var thunder,thunderAnimation;
var bruce,bruceAnimation;
function preload(){
    thunderAnimation = loadAnimation("images/1.png","images/2.png","images/3.png","images/4.png");
    bruceAnimation = loadAnimation("images/walking_1.png","images/walking_2.png","images/walking_3.png","images/walking_4.png","images/walking_5.png",
    "images/walking_6.png","images/walking_7.png","images/walking_8.png");
}

function setup(){
   createCanvas(1100,600);
   thunder = createSprite(550,200,10,10);
   thunder.addAnimation("thunderbolt",thunderAnimation);
   
   bruce = createSprite(100,550,10,10);
   bruce.addAnimation("bruce",bruceAnimation);
}

function draw(){
 background("black");
 raindrops();
 if(keyDown("DOWN_ARROW")){
     bruce.velocityX = 4;
 }
 drawSprites();
}   
function raindrops(){
var drops = createSprite(random(10,1090),0,10,random(5,50));
drops.velocityY = random(2,10);
}