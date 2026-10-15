function setup() {
  createCanvas(1900, 1900);
}

let petImage;

function preload() {
  petImage = loadImage("assets/normal gizmo.png");

}

function draw() {
  background(220);
  image(petImage, 200, 200, 300, 300);

  let sleep = 0;

  let hunger = 0;

  let happiness = 100;

}
 
