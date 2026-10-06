function setup() {
  createCanvas(400, 400);
}
let balls = [];
for (let i = 0; i < 10; i++) { 
  balls.push(new Ball(10(width), 50(height), random(10, 30)));
}     

function draw() {
  background(30, 40, 80);
}
