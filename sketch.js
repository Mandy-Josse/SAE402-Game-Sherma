let spritesheet;
let spritedata;

let notes = [];
let hitLineX = 200;
let score = 0;

let animation = [];
let shermas = [];

function preload() {
  preloadShermaSinging();
  preloadShermaMiss();
  // preloadShermaAwakening();
 
}

screenX = 1000;
screenY = 400;

function setup() {
  createCanvas(screenX, screenY);
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
    });
  }
}

function draw() {
  background(220);
  drawSherma(100, 350);
  drawHitLine();
  updateNotes();
  drawNotes();
  drawUI();

}
