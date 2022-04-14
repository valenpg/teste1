var bola;
function setup() {
  createCanvas(400,400);
  bola=createSprite(200,200,70,70)
  bola.shapeColor="red"
  
}

function draw() {
 background(200);
if (keyDown("up_arrow")){ 
bola.y=bola.y-2
}
 if(keyDown("down_arrow")){
bola.y=bola.y+2
 }
 if (keyDown("right_arrow")){

 bola.x=bola.x+2
 }
 if (keyDown("left_arrow")){
   bola.x=bola.x-2
 }
 
 
 
 
 drawSprites();




}


