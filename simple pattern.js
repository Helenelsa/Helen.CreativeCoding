var colors = ['red', 'green', 'blue', 'orange', 'cyan', 'magenta'];
var rand;

function setup() {
  createCanvas(400, 400);
  background(220);
  noStroke();
  frameRate(10);
}

function draw() {
  for (var x = 0; x < 400; x += 50) {
    for (var y = 0; y < 400; y += 50) {
      rand = int(random(colors.length));
      fill(colors[rand]);
      ellipse(x + 25, y + 25, 40, 40);
    }
  }
}
