let sleep = 100;
let hunger = 0;
let happiness = 100;
let cleanliness = 100;
let health = 100;

let MySound; // deze werkte niet maar wil ik graag nog uitvogelen

let normalPetImage;
let hungryPetImage;
let sleepyPetImage;
let happinessPetImage;
let SuperPetImage;
let sickPetImage;
let dirtyPetImage;
let backgroundImage; // laat een variabele zien voor de achtergrond
let lastDecayTime = 0;
const decayInterval = 1000;
const progressKey = "gizmoProgress"; 

function setup() {
  createCanvas(900, 900);
  loadProgress();
  lastDecayTime = millis();
  saveProgress();
  window.addEventListener("beforeunload", saveProgress); // bewaard dingen(door de hulp van ai)

  const actions = [  // constante actie die zich dus herhaalt
    ["Feed", () => {
      if (hunger <= 20) {
        health = max(0, health - 20); // als honger op 20 of lager krijgt gizmo schade
      }
      hunger = max(0, hunger - 20);
      sleep = min(100, sleep + 20); // telt ook voor de rest van wat hier staat
    }],
    ["Sleep", () => {
      sleep = min(100, sleep + 20);
      cleanliness = max(0, cleanliness - 20);
    }],
    ["Play", () => {
      happiness = min(100, happiness + 20);
      sleep = max(0, sleep - 20);
    }],
    ["Clean", () => {
      cleanliness = min(100, cleanliness + 20);
      health = min(100, health + 20);
    }]
  ];

  actions.forEach(([label, action], index) => { // maakt knoppen voor elke actie
    const button = createButton(label); // laat knoppen werken en reset niet yk
    button.position(20, 300 + index * 70);
    button.size(200, 55);
    button.style('font-size', '24px');
    button.style('cursor', 'pointer');
    button.mousePressed(() => {
      action();
      lastDecayTime = millis();
      saveProgress();
    });
  });
}



function preload() {
  normalPetImage = loadImage("assets/normal gizmo.png"); // dingen in wow
  hungryPetImage = loadImage("assets/gizmo super hungry.png");
  sleepyPetImage = loadImage("assets/sleepy gizmo.png");
  happinessPetImage = loadImage("assets/happy gizmo.png");
  superhappyPetImage = loadImage("assets/gizmo super happy.png");
  sickPetImage = loadImage('assets/sick gizmo.png');
  dirtyPetImage = loadImage('assets/gizmo stinky.png');
  backgroundImage = loadImage("assets/circusje.jpg"); // laad de achtergrond in
}
function draw() {
  background(backgroundImage);

  const decaySteps = floor((millis() - lastDecayTime) / decayInterval); 
  if (decaySteps > 0) {
    decayNeeds(decaySteps);
    lastDecayTime += decaySteps * decayInterval;
    saveProgress();
  }

  let currentPetImage = normalPetImage; // standaard afbeelding van het huisdierq
  if (sleep <= 50) {
    currentPetImage = sleepyPetImage;// als de slaap lager is dan 50, wordt de afbeelding sleepy gizmo.png
  } else if (hunger >= 50) {
    currentPetImage = hungryPetImage;
  } else if (happiness >= 80) {
    currentPetImage = superhappyPetImage;
  } else if (happiness >= 60) {
    currentPetImage = happinessPetImage;
  } else if (health <=40){
    currentPetImage = sickPetImage;
  }else if (cleanliness <=20){
    currentPetImage = dirtyPetImage;
  }
  image(currentPetImage, 300, 520, 300, 400);

  statusbar("Energy", sleep, 60);  // status bar die ergens begint die je kan vullen zelfde geld voor de rest
  statusbar("Hunger", hunger, 110);
  statusbar("Happiness", happiness, 160);
  statusbar("Cleanliness", cleanliness, 210);
  statusbar("Health", health, 260);
}

function loadProgress() { 
  let savedProgress;
  try {
    const storedProgress = localStorage.getItem(progressKey); // laat game door lopen ook zonder op de tab te klikken of open te hebben
    if (storedProgress === null) return;
    savedProgress = JSON.parse(storedProgress);
  } catch (error) {
    console.error("Could not load saved pet progress:", error);
    return;
  }

  const statNames = ["sleep", "hunger", "happiness", "cleanliness", "health"]; // laat alle namen behouden kwa dingen die je moet doen (met de hulp van ai)
  const isValidStat = value => Number.isFinite(value) && value >= 0 && value <= 100;
  if (
    !savedProgress ||
    !statNames.every(name => isValidStat(savedProgress[name])) ||
    !Number.isFinite(savedProgress.savedAt)
  ) {
    console.error("Saved pet progress has an invalid format.");
    return;
  }

  sleep = savedProgress.sleep;
  hunger = savedProgress.version === 2 ? savedProgress.hunger : 100 - savedProgress.hunger;
  happiness = savedProgress.happiness;
  cleanliness = savedProgress.cleanliness;
  health = savedProgress.health;
  decayNeeds(max(0, floor((Date.now() - savedProgress.savedAt) / decayInterval)));
}

function saveProgress() {
  const progress = {
    version: 2,
    sleep,
    hunger,
    happiness,
    cleanliness,
    health,
    savedAt: Date.now() - (millis() - lastDecayTime)
  };

  try {
    localStorage.setItem(progressKey, JSON.stringify(progress));
  } catch (error) {
    console.error("Could not save pet progress:", error);
  }
}

function decayNeeds(steps) {
  for (let step = 0; step < steps; step++) {
    sleep = max(0, sleep - floor(random(1, 4))); // laat de status zakken genreerd hij random door 1 tot 4
    hunger = min(100, hunger + floor(random(1, 4)));
    happiness = max(0, happiness - floor(random(1, 4)));
    cleanliness = max(0, cleanliness - floor(random(1, 4)));

    if (sleep === 0 && hunger === 100 && happiness === 0 && cleanliness === 0) {
      break;
    }
  }
}

function statusbar(label, value, y) {  // functie om de statusbalken te tekenen dit is als het goed is ook een parameter wow
  textSize(18); //definieer de grootte van de tekst
  text(label + ": " + value, 20, y);

  noStroke();
  fill(0);
  rect(300, y - 22, 350, 20);
  fill(80, 190, 100);
  rect(300, y - 22, 350 * value / 100, 20);
}
 
