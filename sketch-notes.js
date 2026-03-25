


function drawHitLine() {
  stroke(255);
  strokeWeight(4);
  line(hitLineX, 0, hitLineX, height);
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
      score += 0;
    }
  }
}


function updateNotes() {
  for (let note of notes) {
    note.x -= 30;

    // Save trail
    note.trail.push({ x: note.x, y: note.y });
    if (note.trail.length > 10) {
      note.trail.shift();
    }

    // Detect miss (if passed hit line)
    if (!note.hit && !note.missed && note.x < hitLineX - 30) {
      note.missed = true;
      score += 0;
      message = "MISS";
    }
  }
}

