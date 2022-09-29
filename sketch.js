var quadrado
function setup() {
  createCanvas(1400,1400);
  quadrado=createSprite(700,700,40,40)
}

function draw() 
{
  background(30);
  if (keyDown("up")) {
    quadrado.y=quadrado.y-2

  }
  if (keyDown("down")) {
    quadrado.y=quadrado.y+2
  }
  if (keyDown("right")) {
    quadrado.x=quadrado.x+2

  }
  if (keyDown("left")) {
    quadrado.x=quadrado.x-2
  }
  
drawSprites()
}




