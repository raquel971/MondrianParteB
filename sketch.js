let lineOffset = 0;
let targetLineOffset = 0;

function setup() {
  createCanvas(800, 784);
  background(245);
  targetLineOffset = random(-10, 10);
}

function draw() {
  if (frameCount % 90 === 0) {
    targetLineOffset = random(-10, 10);
  }
  lineOffset = lerp(lineOffset, targetLineOffset, 0.06);

  fill(255,0,0);
  noStroke();rect(0, 0, 362, 310);

  fill(31,29,113);
  noStroke();rect(363,502,255,255);

  fill(253,220,0);
  noStroke(); rect(0,502,85,280);

  stroke(0);
  strokeWeight(15);
  line(363,0,363,784);

  strokeWeight(16);
  line(0,310 + lineOffset,800,310 + lineOffset);

  strokeWeight(16);
  line(0,502,800,502);

  strokeWeight(10);
  line(86,500,86,784);

  strokeWeight(10);
  line(620,500,620,784);

  strokeWeight(15);
  line(363,760,615,760);
}
