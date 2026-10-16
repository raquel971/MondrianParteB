function setup() {
  createCanvas(800, 784);
  background(245);
}

function draw() {
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
  line(0,310,800,310);

  strokeWeight(16);
  line(0,502,800,502);

  strokeWeight(10);
  line(86,500,86,784);

  strokeWeight(10);
  line(620,500,620,784);

  strokeWeight(15);
  line(363,760,615,760);
}


