var sb,sbImage
var bg,bgImage
function preload(){
  sbImage=loadAnimation("images/sb1.png","images/sb3.png","images/sb5.png")
  bgImage=loadImage("images/bg.jpg")
}
function setup()
 {
    createCanvas(1650,1300);

bg=createSprite(1000,700,2600,1000)
bg.addImage(bgImage)
bg.scale=3
bg.velocityX=-3
bg.x=bg.width/2
sb=createSprite(1600,950,10,10)
sb.addAnimation("running",sbImage)
   sb.velocityX=-8
}

function draw() 
{
  background("peachpuff"); 
  if(bg.x<0){
bg.x=bg.width/2
  }
  if(keyDown==="SPACE"){
sb.y=sb.y-3
  }
  if(keyDown===DOWN_ARROW){
sb.y=sb.y+3
  }
  drawSprites();
}
