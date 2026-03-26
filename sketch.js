let spritesheet;
let spritedata;

let notes = [];
let hitLineX = 200;
let score = 0;

let animation = [];
let shermas = [];

function preload() {
  preloadShermaSinging();
}

screenX = 1000;
screenY = 400;

function setup() {
  createCanvas(640, 480);
  frameRate(6);
  imageMode(CENTER);
}

function setup() {
  createCanvas(800, 400);
  frameRate(10);
  imageMode(CENTER);
    

  for (let i = 0; i < 10; i++) {
    notes.push({
      x: windowWidth + i * 300,
      y: 200,
      size: 40,
      hit: false,
      missed: false,
      trail: [],
      type: random() < 0.3 ? "hold" : "tap",
      length: random(100, 200), // held notes
      holding: false,
      holdProgress: 0,
    });
  }
}

function draw() {
  background(220);
  drawSherma();
  drawHitLine();
  updateNotes();
  drawNotes();
  drawUI();
}
