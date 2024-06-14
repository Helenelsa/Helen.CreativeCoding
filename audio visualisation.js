let mySound, fft;

function preload() {
  // Load the sound file
  mySound = loadSound('Motivational and Inspiring Corporate Music _ Royalty Free Music.mp3');
}

function setup() {
  // Create canvas and set background color
  createCanvas(400, 400);
  background(0);

  // Initialize FFT analyzer
  fft = new p5.FFT();

  // Set sound volume and loop playback
  mySound.setVolume(0.5);
  mySound.loop();
}

function draw() {
  // Clear the background
  background(0);
  
  // Analyze the frequency spectrum
  let spectrum = fft.analyze();

  // Draw the frequency spectrum
  noStroke();
  fill(0, 255, 0);
  for (let i = 0; i < spectrum.length; i++) {
    let x = map(i, 0, spectrum.length, 0, width);
    let h = map(spectrum[i], 0, 255, 0, height);
    rect(x, height - h, width / spectrum.length, h);
  }
  
  // Analyze the waveform
  let waveform = fft.waveform();

  // Draw the waveform
  noFill();
  stroke(255, 0, 0);
  strokeWeight(2);
  beginShape();
  for (let i = 0; i < waveform.length; i++) {
    let x = map(i, 0, waveform.length, 0, width);
    let y = map(waveform[i], -1, 1, height, 0);
    vertex(x, y);
  }
  endShape();
}
