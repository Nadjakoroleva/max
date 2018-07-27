let x = 100;

let y = 250;

let d = 200;

let r = 250;

let g = 250;

let b = 250;

function setup() {
	createCanvas(1000, 1000);
	x = random(100, 1100);
  y = random(100, 1100);
  d = random(50, 200);

  r = random(0, 250);
  g = random(0, 250);
  b = random(0, 250);
  frameRate(1000);
}
  
function draw() {

    x = random(100, 1100);
    y = random(100, 1100);
    d = random(50, 200);

    r = random(0, 250);
    g = random(0, 250);
    b = random(0, 250);
  
  fill(r, g, b);
  ellipse(x, y, d, d);
}


