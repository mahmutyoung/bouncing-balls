import BouncingBall from './BouncingBall.js';

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

const generateOneBall = () => {
  const radius = 20 * Math.random();

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
  const a = Math.random();
  return `rgb(${r}, ${g}, ${b}, ${a})`;
}

const balls = [];
for (let i = 0; i < 10; i++) {
  const newBall = generateOneBall();
  balls.push(newBall);
}

function gameLoop() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  //Update position of the balls and draw them
  balls.map((ball) => ball.update());
  balls.map((ball) => ball.draw());

  requestAnimationFrame(gameLoop);
}

gameLoop();
