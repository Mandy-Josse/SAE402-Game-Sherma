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
    shermaFrames.push(loadImage(`sprites/Miss/sherma-miss-${i}.png`));
  }
}

// function preloadShermaAwakening() {
//   for (let i = 1; i <= totalshermaFrames; i++) {
//     shermaFrames.push(loadImage(`sprites/Awakening/sherma-awakening-${i}.png`));
//   }
// }

function drawSherma(posX, posY) {
  let shermaImg = shermaFrames[shermaIndex];
  let shermaX = posX;
  let shermaY = posY;

  image(shermaImg, shermaX, shermaY - shermaImg.height / 2);

  shermaIndex += shermaDirection;
  if (shermaIndex === totalshermaFrames - 1 || shermaIndex === 0) {
    shermaDirection *= -1;
  }
}