var particles = [];

function setup() {
  createCanvas(800, 800);
  for (var i = 0; i < 200; i++) {
    particles.push(new Particle(random(width), random(height)));
  }
  noStroke();
}

function draw() {
  background(0, 25);
  
  for (var i = 0; i < particles.length; i++) {
    particles[i].attract(mouseX, mouseY);
    particles[i].update();
    particles[i].display();
  }
}

class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.maxSpeed = 5;
    this.color = color(random(255), random(255), random(255));
  }
  
  attract(targetX, targetY) {
    var target = createVector(targetX, targetY);
    var force = p5.Vector.sub(target, this.pos);
    var distance = force.mag();
    distance = constrain(distance, 5, 25);
    force.normalize();
    var strength = (1 / (distance * distance)) * 100;
    force.mult(strength);
    this.acc.add(force);
  }
  
  update() {
    this.vel.add(this.acc);
    this.vel.limit(this.maxSpeed);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }
  
  display() {
    fill(this.color);
    ellipse(this.pos.x, this.pos.y, 10, 10);
  }
}
