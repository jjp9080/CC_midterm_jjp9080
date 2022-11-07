let waves1;
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
  if (frameCount <= 200){
   scene_one();
  }
  if (frameCount > 200 && frameCount <= 300){
    scene_two();
  } 
  if (frameCount > 300 && frameCount <= 400){
    noiseScale = 0.02;
    scene_one();
  }
  if (frameCount > 400 && frameCount <= 600){
    scene_two();
  }
  if (frameCount > 600 && frameCount <= 900){
    scene_three();
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
function scene_three(){
  background(0, 255, 247);
  for (x = -60; x <= width-250; x += 200) {
    for (y = -60; y <= height-200; y += 200) {
      push();
      translate(x, y);
      waves1.radio();
      pop();
    }
  }
}
class waves{
  constructor (x, y){
    this.x_ = x;
    this.y_ = y;
  }
   calm1(calmcolor1, calmcolor2, calmcolor3){
    for (let y = 0; y < height; y += 270) {
    strokeWeight(2);
    stroke(calmcolor1, calmcolor2, calmcolor3);
    noFill();
    
    beginShape();
    
    for (let x = 0; x < width; x+=sp) {
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
  radio() {
    noStroke();
    fill(56, 2, 19);
    rect(101, 102, 115, 80, 7);
    fill(227, 5, 30);
    rect(110, 102, 115, 80, 7);
    fill(195, 198, 201);
    ellipse(140, 140, 40, 40);
    stroke(0);
    strokeWeight(3);
    line(210, 140, 170, 140);
    line(210, 130, 170, 130);
    line(210, 150, 170, 150);
  }
}