let message = '';


function drawUI() {
  fill(0, 0, 255); // Blue color
  text("Score: " + score, 20, 50);

  text("PRESS SPACE TO PLAY", screenX/2, 50);

  textSize(40);
  text(message, screenX/2, 100);
}


function removeUI() {
  clear()
}

function drawWinUI() {
  // Draw score text in white
  fill(0); // White
  text("Score: " + score, 20, 50);

  // Draw "YOU WON" text in green
  fill(0);
  text("YOU WON", screenX/2, 50);

  // Draw "PROMO CODE INSERT" text in black
  fill(0); // Black color
  text("EARN YOUR REWARD", screenX/2, 100);

  // Draw "EARN YOUR REWARD" text in red
  fill(255,0, 0); // Red color
  text("ShermaSong", screenX/2, 150);

}