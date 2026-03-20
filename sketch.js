function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(30);
}





let notes = [];
let hitLineX = 200;

let score = 0;
let message = "";

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
      length: random(100, 200), // heold notes
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

function drawHitLine() {
  stroke(255);
  strokeWeight(4);
  line(hitLineX, 0, hitLineX, height);
}

function updateNotes() {
  for (let note of notes) {
    note.x -= 4;

    // Save position to trail
    note.trail.push({ x: note.x, y: note.y });

    // Limit trail length
    if (note.trail.length > 10) {
      note.trail.shift();
    }
  }
}

function drawNotes() {
  noStroke();

  for (let note of notes) {
    if (note.hit) continue;

    // Draw trail (older = more transparent)
    for (let i = 0; i < note.trail.length; i++) {
      let t = note.trail[i];
      let alpha = map(i, 0, note.trail.length, 20, 150);

      fill(0, 200, 255, alpha);
      rect(t.x, t.y, note.size, note.size);
    }

    // Draw main block (solid)
    fill(0, 220, 255);
    rect(note.x, note.y, note.size, note.size);
  }
}

function keyPressed() {
  if (key === ' ') {
    checkHit();
  }
}

function checkHit() {
  let bestNote = null;
  let bestDist = Infinity;

  for (let note of notes) {
    if (note.hit) continue;

    let distToLine = abs(note.x - hitLineX);

    if (distToLine < bestDist) {
      bestDist = distToLine;
      bestNote = note;
    }
  }

  if (bestNote) {
    if (bestDist < 10) {
      message = "PERFECT";
      score += 100;
      bestNote.hit = true;
    } else if (bestDist < 25) {
      message = "GOOD";
      score += 50;
      bestNote.hit = true;
    } else {
      message = "MISS";
      score -= 20;
    }
  }
}

function drawUI() {
  fill(255);
  textSize(24);
  text("Score: " + score, 20, 30);

  textSize(40);
  text(message, 350, 100);
}


function updateNotes() {
  for (let note of notes) {
    note.x -= 4;

    // Save trail
    note.trail.push({ x: note.x, y: note.y });
    if (note.trail.length > 10) {
      note.trail.shift();
    }

    // Detect miss (if passed hit line)
    if (!note.hit && !note.missed && note.x < hitLineX - 30) {
      note.missed = true;
      score -= 50;
      message = "MISS";
    }
  }
}