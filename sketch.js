let diameter = 0;
let growNum = 10;
let growing = true;

function setup() {
	createCanvas(800, 800);
}

function draw() {
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