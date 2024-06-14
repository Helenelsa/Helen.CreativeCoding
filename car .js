function setup() {
  createCanvas(400, 400);
}

function draw() {
  // Set the background color to a blue shade
  background(14, 144, 181);

  // Car body (main rectangle)
  fill(255, 0, 0);
  rect(100, 200, 200, 50);

  // Car roof (smaller rectangle)
  fill(255, 0, 0);
  rect(130, 170, 140, 30);

  // Front window (triangle)
  fill(135, 206, 235);
  triangle(130, 170, 160, 170, 130, 200);

  // Rear window (triangle)
  fill(135, 206, 235);
  triangle(270, 170, 300, 170, 300, 200);

  // Side windows (rectangles)
  fill(135, 206, 235);
  rect(160, 170, 110, 30);

  // Left tire (ellipse)
  fill(0);
  ellipse(140, 260, 40, 40);

  // Right tire (ellipse)
  fill(0);
  ellipse(260, 260, 40, 40);

  // Car door (line)
  stroke(0);
  line(200, 200, 200, 250);
}
