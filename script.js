import BouncingBall from "./BouncingBall.js";
// Example usage:
const canvas = document.querySelector("canvas");
const ball1 = new BouncingBall(100, 100, 20, "blue", canvas, { x: 3, y: 4 });
const ball2 = new BouncingBall(100, 100, 20, "red", canvas, { x: 4, y: -8 });
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function gameLoop() {
  ball1.context.clearRect(0, 0, canvas.width, canvas.height);
  ball1.draw();
  ball1.draw();
  ball2.draw();
  ball2.update();
  ball1.update();
  requestAnimationFrame(gameLoop);
}

gameLoop();
