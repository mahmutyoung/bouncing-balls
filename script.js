import BouncingBall from "./BouncingBall.js";
// Example usage:
const canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const generateOneBall = () => {
  const radius = 30;

  let x = Math.round(Math.random() * canvas.width);
  let y = Math.round(Math.random() * canvas.height);
  if (x < radius) x += radius;
  else if (x > canvas.width - radius) x -= radius;
  else x = x;
  if (y < radius) y += radius;
  else if (y > canvas.height - radius) y -= radius;
  else y = y;

  const ball = new BouncingBall(
    x,
    y,
    radius,
    getRandomRgb(),
    canvas,
    Math.random() * 5,
    Math.random() * 3
  );
  return ball;
};

function getRandomRgb() {
  const r = Math.round(Math.random() * 255);
  const g = Math.round(Math.random() * 255);
  const b = Math.round(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
}

const balls = [];
for (let i = 0; i < 100; i++) {
  const newBall = generateOneBall();
  balls.push(newBall);
}
console.log(balls);

function gameLoop() {
  balls.map((ball) =>
    ball.context.clearRect(0, 0, canvas.width, canvas.height)
  );
  balls.map((ball) => ball.draw());
  balls.map((ball) => ball.update());
  requestAnimationFrame(gameLoop);
}

gameLoop();
