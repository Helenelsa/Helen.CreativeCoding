let bars = [];
let barWidth = 50;
let maxBarHeight = 200;

function setup() {
  createCanvas(600, 400);
  for (let i = 0; i < width / barWidth; i++) {
    bars.push(new Bar(i * barWidth, height / 2, barWidth, random(maxBarHeight)));
  }
}

function draw() {
  background(220);
  for (let i = 0; i < bars.length; i++) {
    bars[i].display();
  }
}

function mouseClicked() {
  for (let i = 0; i < bars.length; i++) {
    if (bars[i].isMouseOver()) {
      bars[i].changeColor();
      break; // Stop looping once one bar is clicked
    }
  }
}

class Bar {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.color = color(random(255), random(255), random(255));
  }
  
  display() {
    fill(this.color);
    rect(this.x, this.y - this.height, this.width, this.height);
  }
  
  isMouseOver() {
    return mouseX >= this.x && mouseX <= this.x + this.width &&
           mouseY >= this.y - this.height && mouseY <= this.y;
  }
  
  changeColor() {
    this.color = color(random(255), random(255), random(255));
  }
}
