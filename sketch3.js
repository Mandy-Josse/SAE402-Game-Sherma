let spriteSheet;

function preload() {
  spriteSheet = loadImage('Sherma-sprites.png');
}



let frameWidth = 128;
let frameHeight = 128;








let frames = [];

function setup() {
  createCanvas(400, 400);

  let cols = spriteSheet.width / frameWidth;
  let rows = spriteSheet.height / frameHeight;

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      let frame = spriteSheet.get(
        x * frameWidth,
        y * frameHeight,
        frameWidth,
        frameHeight
      );
      frames.push(frame);
    }
  }
}



let currentFrame = 0;

function draw() {
  background(220);

  image(frames[currentFrame], 100, 100);

  // animate
  if (frameCount % 10 === 0) {
    currentFrame = (currentFrame + 1) % frames.length;
  }
}