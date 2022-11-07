let waves1;
let w = 750;
let h = 600;
let sp = 30;
let n1 = 0.0;
let m1 = 0.0;
let m = 0.0;
let n = 0.0;
let noiseScale = 0.01;
let i = 0;
let j = 0;
let k = 0;
let x = 0;

function setup() {
  createCanvas(800, 800);
  background(0);
  waves1 = new waves(200, 400);
}

function draw() {
  background(235, 204, 228);
  if (frameCount <= 300){
   scene_one();
  }
  if (frameCount > 300 && frameCount <= 800){
    scene_two();
  } 
  if (frameCount > 800 && frameCount <= 1200){
    noiseScale = 0.02;
    scene_one();
  }
  if (frameCount > 1200 && frameCount <= 1500){
    scene_two();
  } 
  if (frameCount > 1500 && frameCount <= 1520){
    background(255);
  }
  if (frameCount > 1520 && frameCount <= 1560){
    scene_two();
  } 
}
function scene_one(){
    waves1.calm2(255, 192, 245);
    waves1.calm1(94, 116, 255);
}
function scene_two(){
  background(31, 8, 4);
    noiseScale = 0.05;
    m += 0.3;
    n += 0.3;
    waves1.calm2(0);
    m1 += 10;
    n1 += 10;
    i = 10;
    j = 100;
    waves1.calm1(12, 4, 222);
}
class waves{
  constructor (x, y){
    this.x_ = x;
    this.y_ = y;
  }
   calm1(calmcolor1, calmcolor2, calmcolor3){
    for (let y = 0; y < h; y += 270) {
    strokeWeight(2);
    stroke(calmcolor1, calmcolor2, calmcolor3);
    noFill();
    
    beginShape();
    
    for (let x = 0; x < w; x+=sp) {
    	let noiseScale = map(noise(x + m1 * 5, n1 + x * 5), 0, 1, 50+i, 120+j)
	curveVertex(x, (y+ noiseScale));
      m1 += 0.0001;
      n1 += 0.0002;

    endShape();
    }
  }
}

  calm2(color){
    for (let x = 0; x < width; x++) {
    let noiseValue = noise(x * noiseScale + m, noiseScale + n);
    stroke(noiseValue * 255, 192, 245);
    line(x, noiseValue * 700, x, 800);
      m += 0.000002;
      n += 0.000001;
    }
  }
}