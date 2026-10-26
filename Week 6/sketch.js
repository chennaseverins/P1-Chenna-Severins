let sleep = 50;
let hunger = 50;
let happiness = 50;
let cleanliness = 50;

let petImage; // laat een variabele zien voor het huisdier
let backgroundImage; // laat een variabele zien voor de achtergrond

function setup() {
  createCanvas(900, 900);

  const actions = [
    ["Feed", () => hunger = min(100, hunger + 20)],
    ["Sleep", () => sleep = min(100, sleep + 20)],
    ["Play", () => happiness = min(100, happiness + 20)],
    ["Clean", () => cleanliness = min(100, cleanliness + 20)]
  ];

  actions.forEach(([label, action], index) => { // maak knoppen voor elke actie
    const button = createButton(label);
    button.position(20, 250 + index * 70);
    button.size(200, 55);
    button.style('font-size', '24px');
    button.style('cursor', 'pointer');
    button.mousePressed(action);
  });
}

function preload() {
  petImage = loadImage("assets/normal gizmo.png"); // laad het huisdier in
  backgroundImage = loadImage("assets/circusje.jpg"); // laad de achtergrond in
}
function draw() {
  background(backgroundImage);
  
  image(petImage, 300, 520, 300, 400); // laat het huisdier zien

  textSize(32);
  text("Sleep: " + sleep, 20, 50); // laat de slaapstatus zien

  textSize(32);
  text("Hunger: " + hunger, 20, 100); // laat de hongerstatus zien

  textSize(32);
  text("Happiness: " + happiness, 20, 150); // laat de gelukstatus zien

  textSize(32);
  text("Cleanliness: " + cleanliness, 20, 200); // laat de schoonheidsstatus zien
}
 
