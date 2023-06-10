const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");

const circle = {
  x: 100,
  y: 100,
  radius: 20,
  vx: 5,
  vy: 2,
};

/**
 * Draws a blue circle on the canvas at the specified coordinates and with the specified radius.
 *
 * @param {object} circle - An object containing the x and y coordinates and radius of the circle to draw.
 * @return {void}
 */
function drawCircle() {
  ctx.beginPath();
  ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
  ctx.fillStyle = "blue";
  ctx.fill();
}

/**
 * Updates the canvas by clearing it, drawing a circle, moving the circle's 
 * position, and checking if it collided with the canvas edges. Uses 
 * requestAnimationFrame to continuously update the canvas.
 *
 * @return {void} No return value.
 */
function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawCircle();

  circle.x += circle.vx;
  circle.y += circle.vy;

  if (circle.y + circle.vy > canvas.height || circle.y + circle.vy < 0) {
    circle.vy *= -1;
  }

  if (circle.x + circle.vx > canvas.width || circle.x + circle.vx < 0) {
    circle.vx *= -1;
  }

  requestAnimationFrame(update);
}

update();
