import { Ball } from "./Ball.js";

const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let ball1 = new Ball(100, 100, 50, 1, 2, "red");

ball1.draw();

function updateFrame() {
  console.log("Clearing canvas");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  console.log("Drawing ball 1");
  ball1.draw(ctx);

  console.log("Updating ball 1");
  ball1.update(canvas);

  console.log("Requesting animation frame");
  requestAnimationFrame(updateFrame);
}

updateFrame();
