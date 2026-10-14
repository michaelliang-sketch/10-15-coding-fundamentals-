let x,y,d,xDir,yDir, speed, r, g, b;

function setup() {
  createCanvas(windowWidth, windowHeight);

  x=random(width);
  y=random(height);
  d= random (30,100);


  xDir = random(-2,2);
  yDir = random (-2,2);

  speed= random (1,10);

  r=155;
  g=255;
  b=200;
}


function draw() {
  background(0);
  

  fill(r,g,b);
  circle (x,y,d);
  
  x+=- xDir*speed;
  y += yDir*speed;

  KeepInCanvas();
}



  // Keep In canvas

  if ((x>width) || (x<0)){
    xDir = -xDir;
  }

  if((y>height) || (y<0)){
    yDir= -yDir;
  }



//declaration of Function

function KeepInCanvas(){
  
  // Keep In canvas

  if ((x>width) || (x<0)){
    xDir = -xDir; //changes direction

// change Color
 
    randomColor();
  }





  if((y>height) || (y<0)){
    yDir= -yDir; //changes direction

   randomColor();
  }
}

function randomColor(){
  r= random(0,255);
  g=random(0,255);
  b=random(0,255);
}