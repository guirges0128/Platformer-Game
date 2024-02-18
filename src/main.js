import "kaboom/global";
import kaboom from "kaboom";

const JUMP_FORCE = 1000;
const SPEED = 4;


kaboom({
  font: "sans-serif",
  background: [100, 200, 255], 
});

loadSprite("bean", "src/sprites/bean.png");

const player = add([
  sprite("bean"),
  pos(120, 80),
  area(),
  body(),
]);

add([
  rect(300, 48),
  pos(0, height() -48),
  color(100, 200, 25),
  outline(4),
  area(),
  body({isStatic: true}),
  "floor"
]);

setGravity(1600);

function playerJumping() {
  if (player.isGrounded()) {
    player.jump(JUMP_FORCE);
  }
}

player.onKeyPress("space", () => {
  playerJumping();
})

function generateRandomTiles() {

  for (let r = 0; r < 5; r++) {
    add([
      rect(200, 40),
      pos(rand(1000), rand(4000)),
      color(100, 200, 25),
      outline(4),
      area(),
      body({isStatic: true}),
      move(RIGHT, 100),
      "tile"
    ]);
  }
}

generateRandomTiles();

player.onKeyDown("a", () => {
  player.pos.x -= SPEED;
});

player.onKeyDown("d", () => {
  player.pos.x += SPEED;
});


function generateRandomCoins() {
  for (let c = 0; c < 5; c++) {
    add([
      circle(20),
      pos(rand(1000), rand(4000)),
      color(255, 255, 0),
      outline(4),
      area(),
      body({isStatic: true}),
      "coin",
    ]);
  }
}

generateRandomCoins();

let SCORE = 0;

const scoreBoard = add([
  text("Score:"),
  pos(50, 50),
  color(0, 0, 0),
]);

player.onCollide("coin", (coin) => {
  destroy(coin);
  SCORE++;
});

onUpdate(() => {
  scoreBoard.text = SCORE;
});




