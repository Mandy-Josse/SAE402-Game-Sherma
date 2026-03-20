
let spriteSheet;
let frames = [];
let currentFrame = 0;
let frameDelay = 6; // frames to wait before switching
let frameCounter = 0;

function preload() {
  spriteSheet = loadImage('Sherma-sprites.png');
}

function setup() {
  createCanvas(800, 600);
  spriteSheet.loadPixels();

  let visited = new Set();

  // Detect sprites automatically
  for (let y = 0; y < spriteSheet.height; y++) {
    for (let x = 0; x < spriteSheet.width; x++) {
      let idx = (y * spriteSheet.width + x) * 4;
      let alpha = spriteSheet.pixels[idx + 3];

      if (alpha === 0 || visited.has(`${x},${y}`)) continue;

      let bbox = findBoundingBox(x, y, visited);
      let frame = spriteSheet.get(bbox.x, bbox.y, bbox.w, bbox.h);
      frames.push(frame);
    }
  }

  console.log("Detected frames:", frames.length);
}

// Flood-fill to mark sprite and find bounding box
function findBoundingBox(startX, startY, visited) {
  let minX = startX, maxX = startX;
  let minY = startY, maxY = startY;
  let stack = [[startX, startY]];

  while (stack.length > 0) {
    let [x, y] = stack.pop();
    let key = `${x},${y}`;
    if (visited.has(key)) continue;
    visited.add(key);

    let idx = (y * spriteSheet.width + x) * 4;
    let alpha = spriteSheet.pixels[idx + 3];
    if (alpha === 0) continue;

    minX = min(minX, x);
    maxX = max(maxX, x);
    minY = min(minY, y);
    maxY = max(maxY, y);

    // Add neighbors
    for (let dx = -1; dx <= 1; dx++) {
      for (let dy = -1; dy <= 1; dy++) {
        let nx = x + dx;
        let ny = y + dy;
        if (nx >= 0 && nx < spriteSheet.width && ny >= 0 && ny < spriteSheet.height) {
          stack.push([nx, ny]);
        }
      }
    }
  }

  return { x: minX, y: minY, w: maxX - minX + 1, h: maxY - minY + 1 };
}

function draw() {
  background(220);

  if (frames.length > 0) {
    image(frames[currentFrame], width / 2, height / 2);

    frameCounter++;
    if (frameCounter >= frameDelay) {
      currentFrame = (currentFrame + 1) % frames.length;
      frameCounter = 0;
    }
  }
}