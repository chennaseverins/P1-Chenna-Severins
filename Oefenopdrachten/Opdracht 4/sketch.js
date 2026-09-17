let stoplight = 'red'
let enterCooldown = 0;
function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);
  fill(0)
  text('Houd B in om een blokje te laten verschijnen',20,20)
  text('Druk op spatie om het getal op 0 te zetten.',20,120)
  text('Druk op enter om van rood -> groen -> oranje te gaan.',20,240)
  text('Beweeg de eightball met WASD of de pijltjestoetsen.',360,20)

  drawStoplight(40, 280);

  if (stoplight == 'red'){
    fill('red')
    circle(40 + 50, 280 + 50, 55);
  } else if (stoplight == 'green'){
    fill('green')
    circle(40 + 50, 280 + 200, 55);
  } else if (stoplight == 'orange'){
    fill('orange')
    circle(40 + 50, 280 + 125, 55);
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

function drawStoplight(x, y) {
  fill('#222222');
  rect(x, y, 100, 250, 10);

  fill(150);
  circle(x + 50, y + 50, 55);
  circle(x + 50, y + 125, 55);
  circle(x + 50, y + 200, 55);
}
