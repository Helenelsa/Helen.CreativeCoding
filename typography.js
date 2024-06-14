let customFont;

function preload() {
  // Load the custom font
  customFont = loadFont('BlackOpsOne-Regular.ttf');
}

function setup() {
  createCanvas(400, 200);
  background(255); // Set background to white
  textFont(customFont); // Set the custom font
  textSize(32);
  textAlign(CENTER, CENTER);
  fill(0);
  text("Bath Spa University", width / 2, height / 2);
}

function draw() {
  // No additional drawing required
}
