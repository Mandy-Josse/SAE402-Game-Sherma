let message = '';


function drawUI() {
  fill(255);
  textSize(24);
  text("Score: " + score, 20, 30);

  text("PRESS SPACE TO PLAY", screenX/2, 50);

  textSize(40);
  text(message, screenX/2, 100);
}

