export default class BouncingBall {
  constructor(x, y, radius, color, canvas, vx, vy) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.canvas = canvas;
    this.context = this.canvas.getContext("2d");
    this.vx = vx;
    this.vy = vy;
  }

  draw() {
    this.context.beginPath();
    this.context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    this.context.fillStyle = this.color;
    this.context.fill();
    this.context.closePath();
  }

  update() {
    if (this.x + this.radius > this.canvas.width || this.x - this.radius < 0) {
      this.vx = -this.vx;
    }
    if (this.y + this.radius > this.canvas.height || this.y - this.radius < 0) {
      this.vy = -this.vy;
    }
    this.x += this.vx;
    this.y += this.vy;
  }
}
