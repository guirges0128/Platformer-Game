import "kaboom/global";
import kaboom from "kaboom";

const JUMP_FORCE = 900;
const SPEED = 4;


kaboom({
  font: "sans-serif",
  background: [100, 200, 255]
});

loadSprite("bean", "src/sprites/bean.png");

const player = add([
  sprite("bean"),
  pos(120, 80),
  area(),
  body(),
]);

add([
  rect(width(), 48),
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

add([
  rect(200, 40),
  pos(500, 1000),
  color(100, 200, 25),
  outline(4),
  area(),
  body({isStatic: true}),
  "tile1"
]);

add([
  rect(200, 40),
  pos(900, 1000),
  color(100, 200, 25),
  outline(4),
  area(),
  body({isStatic: true}),
  "tile2"
]);

add([
  rect(200, 40),
  pos(1300, 900),
  color(100, 200, 25),
  outline(4),
  area(),
  body({isStatic: true}),
  "tile3"
]);

player.onKeyDown("a", () => {
  player.pos.x -= SPEED;
});

player.onKeyDown("d", () => {
  player.pos.x += SPEED;
});

add([
  circle(20),
  pos(600, 960),
  color(255, 255, 0),
  outline(4),
  area(),
  body({isStatic: true}),
  "coin",
]);

add([
  circle(20),
  pos(1000, 960),
  color(255, 255, 0),
  outline(4),
  area(),
  body({isStatic: true}),
  "coin",
]);

add([
  circle(20),
  pos(1400, 860),
  color(255, 255, 0),
  outline(4),
  area(),
  body({isStatic: true}),
  "coin",
]);

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




