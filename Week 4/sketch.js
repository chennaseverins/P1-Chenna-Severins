function setup() {

  createCanvas(1900, 1080);


}

function draw() {
  background(220);
  for (let i = 0; i < 30; i++){           // for loop maak 30 keer een cirkel
    if (keyIsDown(8)){              // als je backspace indrukt dan maak je een cirkel of andere objecten
    fill(random(255), random(255), random(255), 150);       // vult de cirkel met een random kleur
    ellipse(random(width), random(height), 50, 50);        // maakt een cirkel met random x en y positie en een diameter van 50
    }
  }
let shapes = ["rect", "square", "triangle"];   //wow dit is een array
let shape = random(shapes);
let x = random(width);
let y = random(height);

console.log(shapes[0]);
shapes.push("ellipse");  //voegt een nieuwe waarde toe aan de array shapes ja

if (shape == "ellipse") {
  ellipse(x, y, 50, 50);
} else if (shape == "square") {
  rect(x, y, 50, 50);
} else {
  triangle(x, y - 25, x - 25, y + 25, x + 25, y + 25);
}
  }

