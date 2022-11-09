let radio1;
let radio2;
let incr;
let change1;
let color1, color2, color3, color4;
let speed = 0;
let sp = 30;
let waves1;
let waves2;
let waves3;
let waves4;
let noiseScale = 0.01;
let m = 0.0;
let n = 0.0;
let s = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  radio1 = new radio(200, 200);
  radio2 = new radiozoom(width, height);
  incr = 1;
  color1 = color(195, 198, 201);
  color2 = color(255, 192, 245);
  change1 = new changeColor(color1, color2, 0);
  createCanvas(windowWidth, windowHeight);
  waves1 = new waves(0, 0, 100, 110);
  waves2 = new waves(0, 0, 100, 120);
  waves3 = new waves(0, 0, 100, 140);
  waves4 = new waves(0, 0, 100, 180);
}


function draw() {
  if (frameCount <= 50) {
    radioloop1();
  }
  if (frameCount > 50 && frameCount <= 100) {
    radioloop2();
  }
  if (frameCount > 100 && frameCount <= 150) {
    radioloop3();
  }
  if (frameCount > 150 && frameCount <= 200) {
    radioloop4();
  }
  if (frameCount > 200 && frameCount <= 250) {
    radioloop5();
  }
  if (frameCount > 250 && frameCount <= 350) {
    radioZoom();
  }
  if (frameCount > 350 && frameCount <= 550) {
    change1.display(255, 192, 245);
  }
  if (frameCount > 550 && frameCount <= 650) {
    background(color2);
    calm2();
    waves1.display(9, 2, 219);
    s+=1;
  }
  if (frameCount > 650 && frameCount <= 750) {
    background(color2);
    calm2();
    waves2.display(10, 3, 220);
    s+=2;
  }
  if (frameCount > 750 && frameCount <= 850) {
    background(74, 1, 18);
    noiseScale = 0.02;
    m += 0.1;
    n += 0.1;
    calm2();
    waves3.display(11, 4, 221);
    s+=3;
  }
  if (frameCount > 850 && frameCount <= 1000) {
    background(43, 2, 11);
    noiseScale = 0.05;
    m += 0.3;
    n += 0.3;
    calm2();
    waves4.display(12, 5, 222);
    s+=4;
  }
  if (frameCount > 1000 && frameCount <= 1010) {
    background(0);
  }
  if (frameCount > 1010 && frameCount <= 1040) {
    background(43, 2, 11);
    noiseScale = 0.05;
    m += 0.3;
    n += 0.3;
    calm2();
    waves4.display(12, 5, 222);
    s+=4;
  }
  if (frameCount > 1040 && frameCount <= 1050) {
    background(0);
  }
  if (frameCount > 1050 && frameCount <= 1070) {
    background(43, 2, 11);
    noiseScale = 0.05;
    m += 0.3;
    n += 0.3;
    calm2();
    waves4.display(12, 5, 222);
    s+=4;
  }
  if (frameCount > 1070 && frameCount <= 1080) {
    background(0);
  }
  if (frameCount > 1080 && frameCount <= 1090) {
    background(43, 2, 11);
    noiseScale = 0.06;
    m += 0.4;
    n += 0.4;
    calm2();
    waves4.display(12, 5, 222);
    s+=4;
  }
   if (frameCount > 1090 && frameCount <= 2000) {
    background(0);
  }
}

function radioloop1() {
  background(0, 255, 247);
  for (x = -60; x <= width; x += 200) {
    for (y = -60; y <= height; y += 200) {
      push();
      translate(x, y);
      radio1.display(color(156, 2, 19));
      pop();
    }
  }
}
function radioloop2() {
  background(0, 255, 247);
  for (x = -60; x <= width; x += 200) {
    for (y = -60; y <= height; y += 200) {
      push();
      translate(x-50, y-50);
      scale(1.4);
      radio1.display(color(156, 2, 19));
      pop();
    }
  }
}
function radioloop3() {
  background(0, 255, 247);
  for (x = -70; x <= width; x += 300) {
    for (y = -70; y <= height; y += 200) {
      push();
      translate(x-100, y-100);
      scale(2);
      radio1.display(color(156, 2, 19));
      pop();
    }
  }
}
function radioloop4() {
  background(0, 255, 247);
  for (x = 0; x < width; x += 550) {
    for (y = 0; y < height; y += 350) {
      push();
      translate(x-400, y-400);
      scale(4);
      radio1.display(color(156, 2, 19));
      pop();
    }
  }
}
function radioloop5() {
  background(0, 255, 247);
  translate(random(-5, 5), random(-5, 5));
  push();
  for (x = 0; x < 10; x += 10) {
    for (y = 0; y < 10; y += 10) {
      translate(x-1000, y-1000);
      scale(10);
      radio1.display(color(156, 2, 19));
      pop();
    }
  }
}
function radioZoom() {
  push();
  translate(width/6, height/6);
  scale(incr);
  radio2.display(color(227, 5, 30));
  incr = incr * 1.01;
  pop();
}


class radio {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  display(c1, c2, c3) {
    line(this.x+10, this.y-98, this.x-50, this.y-140);
    noStroke();
    fill(c1, c2, c3);
    rect(this.x-99, this.y - 98, this.x-85, this.y -120, 7);
    fill(227, 5, 30);
    rect(this.x-90, this.y - 98, this.x-85, this.y - 120, 7);
    fill(195, 198, 201);
    ellipse(this.x - 60, this.y - 60, 40, 40);
    stroke(0);
    strokeWeight(3);
    line(this.x + 10, 140, 170, 140);
    line(this.x+10, 130, 170, 130);
    line(this.x + 10, 150, 170, 150);
  }
}
class radiozoom {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  display(c1, c2, c3) {
    background(c1, c2, c3);
    fill(195, 198, 201);
    noStroke();
    ellipse(this.x/5, this.y/2, this.x/2*incr, this.x/2*incr);
  }
}
class changeColor {
  constructor(color1, color2, speed) {
    this.color1 = color1;
    this.color2 = color2;
    this.speed = speed;
  }
  display(c1, c2, c3) {
    background(lerpColor(this.color1, this.color2, this.speed)); //https://p5js.org/reference/#/p5/lerpColor
    this.speed += 0.01;
    if (this.speed >= 4) {
      this.speed = 0.0;
      this.color1 = this.color2;
      this.color2 = color(c1, c2, c3);
    }
  }
}
function changeBackground() {
  background(lerpColor(color1, color2, speed)); //https://p5js.org/reference/#/p5/lerpColor
  speed += 0.01;
  if (speed >= 4) {
    speed = 0.0;
    color1 = color2;
    color2 = color(255, 192, 245);
  }
}

class waves {
  constructor(m1, n1, i, j) {
    this.m1 = m1;
    this.n1 = n1;
    this.i = i;
    this.j = j;
  }
  display(calmcolor1, calmcolor2, calmcolor3) {
    for (let y = 0; y < height; y += 180) {
      strokeWeight(2);
      stroke(calmcolor1, calmcolor2, calmcolor3);
      noFill();

      beginShape();
      for (let x = 0; x < width; x += sp) {
        let noiseScale = map(noise(x + this.m1+s, this.n1 + x + s), 0, 1, this.i, this.j)
          curveVertex(x, (y+ noiseScale));
        //this.m1 += 0.0001;
        //this.n1 += 0.0002;

        endShape();
      }
    }
  }
}
function calm2() {
  for (let x = 0; x < width; x++) {
    let noiseValue = noise(x * noiseScale + m, noiseScale + n);
    stroke(noiseValue * 255, 192, 245);
    line(x, noiseValue * 700, x, 800);
    m += 0.000002;
    n += 0.000001;
  }
}