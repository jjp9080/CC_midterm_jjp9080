let diameter = 0;
let growNum = 10;
let growing = true;
var x, y, w,h;
var totalShapeCount = 500;
var i = 0;
var option = 1;

function setup() {
	createCanvas(800, 800);	
}

function draw() {
	if (option == 1){
		shakingSquare();
	}
	if (option == 2){
		stroke(255, 50);
  		for (i = 0; i < totalShapeCount; i++) {
     		drawRandomShape(2);
  		}
  
  		stroke (0, 50);
  		for (i = 0; i < totalShapeCount; i++) {
  	 		drawRandomShape(1);
		}
	}
}
function shakingSquare(){
	background(0);
	translate(random(-40,40),random(-40,40));
	noFill();
	stroke(255);
	strokeWeight(4);
	rect(50, 50, diameter, diameter);
	if (diameter > 700){
		growing = false;
	}
	if (growing == true){
		diameter += growNum;
	}
}
function drawRandomShape(choice){
	x = random(width);
	y = random(height);
	w = random(5, 100);
	h = random(5, 100);
	  
	if (choice == 1) {
		noStroke();
	    fill(random(25), random(5), random(255), 50);
	    ellipse(x, y, w, h);
	  }
	  else {
	    noStroke();
	    fill(random(255), random(255), random(255), 90);
	    rect(x, y, w, h);
	  }
}
function mousePressed() {
  option += 1;
  if (option > 2) {
    option = 1;
  }
}
