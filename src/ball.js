/**
 * @param {number} x - the x-coordinate of the ball
 * @param {number} y - the y-coordinate of the ball
 * @param {number} radius - the radius of the ball
 * @param {number} dx - the x-direction of the ball
 * @param {number} dy - the y-direction of the ball
 */


class Ball {
    constructor (x, y, radius, dx, dy, color, speed) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.speed = speed;
        this.dx = dx * this.speed;
        this.dy = dy * this.speed;
    }

    draw = (ctx) => {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();
    }

    move = (ctx) => {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        this.draw(ctx);
        this.x += this.dx;
        this.y += this.dy;
        requestAnimationFrame(() => this.move(ctx));
    }
}