function setup(){
  createCanvas(500, 500);
  background(250);
}

function draw(){
  // Background color
  background(14, 144, 181);

  // Alien head
  fill(93, 255, 131);
  ellipse(250, 150, 120, 180);

  // Eyes
  fill(255);
  ellipse(220, 140, 40, 60);
  ellipse(280, 140, 40, 60);
  fill(0);
  ellipse(220, 140, 20, 40);
  ellipse(280, 140, 20, 40);

  // Antenna
  stroke(0);
  strokeWeight(2);
  line(250, 60, 230, 30);
  line(250, 60, 270, 30);
  fill(255, 98, 242);
  ellipse(230, 30, 15, 15);
  ellipse(270, 30, 15, 15);

  // Body
  noStroke();
  fill(93, 255, 131);
  ellipse(250, 320, 150, 200);

  // Arms
  fill(93, 255, 131);
  ellipse(175, 320, 30, 100);
  ellipse(325, 320, 30, 100);

  // Legs
  ellipse(215, 420, 50, 100);
  ellipse(285, 420, 50, 100);

  // Belly button
  fill(255, 98, 242);
  ellipse(250, 350, 10, 10);
}
