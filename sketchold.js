let spritesheet;
let spritedata;

let notes = [];
let hitLineX = 200;
let score = 0;

let animation = [];
let shermas = [];





function preload() {

}


function draw() {
  background(0);

  for (let sherma of shermas) {
    sherma.show();
    sherma.animate();
  }
}


function setup() {
  createCanvas(640, 480);
  let frames = spritedata.frames;
  for (let i = 0; i < frames.length; i++) {
    let pos = frames[i].position;
    let img = spritesheet.get(pos.x, pos.y, pos.w, pos.h);
    animation.push(img);
  }

  for (let i = 0; i < 5; i++) {
    shermas[i] = new Sprite(animation, 0, i * 75, random(0.1, 0.4));
  }
}


function setup() {
  createCanvas(800, 400);

  for (let i = 0; i < 10; i++) {
    notes.push({
      x: 800 + i * 300,
      y: 200,
      size: 40,
      hit: false,
      missed: false,
      trail: [],
      type: random() < 0.3 ? "hold" : "tap",
      length: random(100, 200), // held notes
      holding: false,
      holdProgress: 0
    });
  }
}




function draw() {
  background(20);
  drawHitLine();
  updateNotes();
  drawNotes();
  drawUI();
}