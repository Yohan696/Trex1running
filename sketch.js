//introducing the variables 
var trex ,trex_running, ground, ground_running, score, ground_inv; 
//preloading the graphics of trex for running animation 
function preload(){
  trex_running = loadAnimation ("trex1.png", "trex3.png", "trex4.png" );
  ground_running = loadAnimation ("ground2.png");
}
//creating the canvas trex and ground sprites for the setup
function setup(){
  //creating the canvas where trex runs
  createCanvas(600,200)
  var score = 0;
  //create a trex sprite
  trex = createSprite(40,150, 30,20);
  //trex animation 
  trex.addAnimation ("TREXMOVING", trex_running);
  //resizing the trex to the canvas
  trex.scale = 0.4;
  //creating the ground sprite
  ground_inv = createSprite (300, 180, 1200, 5);
  ground = createSprite(300,178,1200,1);
  ground.addAnimation ("GROUNDMOVING", ground_running);
  ground_inv.visible = false; 
  }

function draw(){
//creating yellow background
  background("yellow")
   drawSprites();
    textSize(18);
   //  text("THE TREX RUNNER GAME!", 180, 20); 
   // text("Press Spacebar to jump...", 200, 90);
   textSize(12);
   text ("SCORE :   ", score, 480, 30);
   ground.velocityX = -2
   if (ground.x < 0) {
    ground.x = ground.width/2;
   }
   //controlling the trex with space key to jump on facing the obstacles
    if (keyDown ("space")) {
      //assigning the Y velocity to the trex on pressing space
      trex.velocityY = -9;
       } 
      //pulling down the trex from the jumping height
    trex.velocityY = trex.velocityY + 0.5;
    //fixing the trex to the ground sprite 
    trex.collide (ground_inv);
}
