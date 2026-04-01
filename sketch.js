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

screenX = 960;
screenY = 440;


function setup() {
  createCanvas(screenX, screenY);
  frameRate(10);
  imageMode(CENTER);
    

  for (let i = 0; i < 30; i++) {
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
  drawSherma(100, 350);
  drawHitLine();
  updateNotes();
  drawNotes();
  drawUI();



  if (score >= 1000) {
    removeUI()
    background(220);
    drawSherma(100, 350);
    drawHitLine();
    drawWinUI();
    noloop()
  }

}