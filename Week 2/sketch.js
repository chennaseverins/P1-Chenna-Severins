let cars = [
  { x: 800, y: 600 },
  { x: 500, y: 600 }
];
let clouds = [
  { x: 80, y: 100, speed: 1 },
  { x: 350, y: 180, speed: 0.7 },
  { x: 950, y: 130, speed: 1.2 }
];
let sun = { x: 600, y: 70, speed: 1.5 };
let stoplight = 'red'
let enterCooldown = 0;
if (stoplight == 'red'){
   fill('red')
circle( + 35,  + 35, 35);
}else if (stoplight == 'green'){
  fill('green')
  circle( + 35,  + 145, 35);
}else if (stoplight == 'orange'){
fill('orange')
circle( + 35,  + 145, 35);
}
if (enterCooldown > 0){
  enterCooldown -= 1;
}
if (keyIsDown(13) && enterCooldown === 0){
    if (stoplight === 'red'){
      stoplight = 'green'
    } else if (stoplight === 'green'){
      stoplight = 'orange'
    } else if (stoplight === 'orange'){
      stoplight = 'red'
    }
    enterCooldown = 10;
  }
}
function setup() {
  createCanvas(1400, 800);
}

function draw() {
  background('#88c6dd');

  drawSun(sun.x, sun.y);
  for (let cloud of clouds) {
    drawCloud(cloud.x, cloud.y);
  }

  moveSky();
  drawMountain(30, 75);
  drawMountain(250, 125);

  drawRoad(700);

  drawStoplight(1100, 260);
  drawTree(200, 500);
  drawTree(600, 500);

  for (let car of cars) {
    drawCar(car.x, car.y);
  }
  moveCar();

  drawTree(800, 700);

}

function moveCar() {
  for (let car of cars) {
    car.x += 2;

    if (car.x > width) {
      car.x = -100;
    }
  }
}

function moveSky() {
  for (let cloud of clouds) {
    cloud.x += cloud.speed;

    if (cloud.x > width - 45 || cloud.x < 30) {
      cloud.speed *= -1;
    }
  }

  sun.x += sun.speed;

  if (sun.x > width - 50 || sun.x < 50) {
    sun.speed *= -1;
  }
}

function drawRoad(y) {
  fill('#0b2e3b');
  rect(1, 600, 1400, 800);
  stroke(255);
  strokeWeight(6);
  for (let x = 0; x < width; x += 100) {
    line(x, y, x + 55, y);
  }
  noStroke();
}

function drawCloud(x, y) {
  fill('white');
  circle(x + 20, y, 50);
  circle(x - 30, y, 50);
  circle(x, y - 20, 50);
  circle(x, y + 5, 50);
}

function drawSun(x, y) {
  fill('yellow');
  circle(x, y, 100);
}

function drawMountain(x, y) {
  fill('grey');
  triangle(x, y + 525, x + 470, y + 525, x + 220, y);
}

function drawTree(x, y) {
  fill('brown');
  rect(x, y, 50, 100);

  fill('green');
  circle(x + 30, y - 10, 90);
  circle(x + 70, y, 90);
  circle(x - 20, y, 90);
}

function drawCar(x, y) {
  fill('red');
  rect(x, y, 100, 50);
  rect(x + 20, y - 30, 60, 30);

  fill('black');
  circle(x + 25, y + 50, 25);
  circle(x + 75, y + 50, 25);
}

function drawStoplight(x, y) {
  fill('#222222');
  rect(x, y, 70, 180, 100);

  fill('red');
  circle(x + 35, y + 35, 35);

  fill('yellow');
  circle(x + 35, y + 90, 35);

  fill('green');
  circle(x + 35, y + 145, 35);

  fill('#444444');
  rect(x + 30, y + 180, 10, 150);
  rect(x - 20, y + 325, 110, 15);
}