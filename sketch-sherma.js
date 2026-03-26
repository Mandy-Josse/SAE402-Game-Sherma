let shermaFrames = [];
let shermaIndex = 0;
let totalshermaFrames = 4;
let shermaDirection = 1;

function preloadShermaSinging() {
  for (let i = 1; i <= totalshermaFrames; i++) {
    shermaFrames.push(loadImage(`sprites/Singing/sherma-singing-${i}.png`));
  }
}

function preloadShermaMiss() {
  for (let i = 1; i <= totalshermaFrames; i++) {
    shermaFrames.push(loadImage(`sprites/Miss/sherma-singing-${i}.png`));
  }
}

function preloadShermaAwakening() {
  for (let i = 1; i <= totalshermaFrames; i++) {
    shermaFrames.push(loadImage(`sprites/Awakening/sherma-singing-${i}.png`));
  }
}

function drawSherma() {
  let shermaImg = shermaFrames[shermaIndex];
  let shermaX = screenX/2;
  let shermaY = screenY/0.75;

  image(shermaImg, shermaX, shermaY - shermaImg.height / 2);

  shermaIndex += shermaDirection;
  if (shermaIndex === totalshermaFrames - 1 || shermaIndex === 0) {
    shermaDirection *= -1;
  }
}