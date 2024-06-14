function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}let ballX = 300;
let ballY = 600;
let ballVel = 0;
let targets = [];
let score = 0;

function setup() {
  createCanvas(600, 700);
  for (let i = 0; i < 3; i++) {
    let target = {
      x: random(0, width),
      y: random(100, 500),
      size: 70,
      speed: random(2, 5)
    };
    targets.push(target);
  }
}

function draw() {
  background(100, 30, 10);
  fill(153, 76, 0);
  rect(0, 600, 600, 100);

  fill(102, 51, 0);
  rect(450, 490, 80, 60);
  rect(485, 550, 10, 90);
  fill(255, 255, 255);
  textSize(14);
  text("SCORE", 468, 510);
  textSize(25);
  text(score, 483, 535);

  fill(255, 255, 255);
  ellipse(ballX, ballY, 20, 20);

  for (let target of targets) {
    fill(255, 0, 0);
    ellipse(target.x, target.y, target.size, target.size);
    fill(255, 255, 255);
    ellipse(target.x, target.y, target.size - 10, target.size - 10);
    fill(255, 0, 0);
    ellipse(target.x, target.y, target.size - 30, target.size - 30);
    fill(255, 255, 255);
    ellipse(target.x, target.y, target.size - 40, target.size - 40);
    fill(255, 0, 0);
    ellipse(target.x, target.y, target.size - 60, target.size - 60);

    target.x += target.speed;
    if (target.x > width) {
      target.x = -target.size;
      target.y = random(100, 500);
      target.speed = random(2, 5);
    }

    if (dist(ballX, ballY, target.x, target.y) < (target.size / 2 + 10)) {
      target.x = -target.size;
      target.y = random(100, 500);
      target.speed = random(2, 5);
      ballY = 600;
      ballVel = 0;
      score++;
    }
  }

  ballY += ballVel;
  if (ballY < 0) {
    noLoop(); // Game over
    textSize(50);
    fill(255);
    textAlign(CENTER, CENTER);
    text("Game Over", width / 2, height / 2);
  }
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    ballVel = -5;
  }
}
