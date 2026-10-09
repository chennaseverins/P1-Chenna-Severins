const question = [
  {
    'question': 'what is the name of this character?',
    'options': ['A) Pusher', 'B) Jaeger', 'C) Pitcher', 'D) Big grunt'], // dit is de eerste vraag
    'answer': 'B',
  },
  {
    'question': 'who is the best prime asset?',
    'options': ['A) mother gooseberry', 'B) franco barbino', 'C) Leland Coyle', 'D) The Kress twins'], // dit is de tweede vraag
    'answer': 'C'
  },
  {
    'question': 'What does pusher do?',
    'options': ['A) NOTHING', 'B) staring in oblivion', 'C) jumps you', 'D) gasses you'], // dit is de derde vraag
    'answer': 'D'
  },
  {
    'question': 'who is lillya Bogomolova?',
    'options': ['A) a prime asset', 'B) a npc', 'C) a reagent', 'D) ur worst nightmare'], // dit is de vierde vraag 
    'answer': 'A'
  },
  {
    'question': 'in which trial do u find coyle his diary?',
    'options': ['A) cancel the autopsy', 'B) locksock the warden', 'C)vinicate the guilty', 'D)tilt the scales of justice'], // dit is de vijfde vraag
    'answer': 'B'
  },
  {
    'question': 'what is the diffrence between a grunt and a big grunt?',
    'options': ['A) size', 'B) being a one shot', 'C) damage', 'D) uhhh idk'], // dit is de zesde vraag
    'answer': 'C'
  },
  {
    'question': 'who is the worst exPop?',
    'options': ['A) pusher', 'B) pitcher', 'C) grunt', 'D) nighthunter'], // dit is de zevende vraag
    'answer': 'D'
  },
  {
    'question': 'do we out last the outlast trials?',
    'options': ['A) YES', 'B) no..', 'C) easterman save me', 'D) get me out of here'], // dit is de achtste vraag 
    'answer': 'A'
  },
  {
    'question': 'what is the best outlast rig?',
    'options': ['A) stun', 'B) jammer', 'C) xray', 'D) barricade'], // dit is de negende vraag
    'answer': 'A'
  },
  {
    'question': 'who rebels against the murkoff corporation in the outlast trials?',
    'options': ['A) easterman', 'B) clyde', 'C) amelia', 'D) hatsune miku'], // dit is de tiende vraag
    'answer': 'C'
  }
];

let currentQuestion = 0; // laat de huidige vraag zien swagg
let score = 0;
let buttons = []; // een array om de knoppen op te slaan
let restartButton;

function setup() {
  createCanvas(1900, 1080);

  const positions = [ // posities van de knoppen
    [300, 700],
    [300, 900],
    [1200, 700],
    [1200, 900]
  ];

  for (let i = 0; i < 4; i++) { // maak 4 knoppen voor de opties dit is een voorloop die de knoppen maakt en positioneert yeahhh
    const button = createButton('');
    button.position(positions[i][0], positions[i][1]);
    button.size(300, 100);
    button.style('font-size', '24px'); // zet de font size van de knoppen vrij letterlijk overgenomen van de notion pagina
    button.style('cursor', 'pointer');
    button.mousePressed(() => checkAnswer(String.fromCharCode(65 + i)));
    buttons.push(button);
  }

  restartButton = createButton('Play again'); // maakt een soort nieuwe knop die de quiz opnieuw start
  restartButton.position(800, 700);
  restartButton.size(300, 80);
  restartButton.style('font-size', '24px');
  restartButton.mousePressed(restartQuiz);
  restartButton.hide();

  updateButtons(); // update de knoppen zodat de volgende vraag zijn antwoorden laat zien
}

function draw() {
  background('purple');
  fill('white');
  textAlign(CENTER, CENTER);

  if (currentQuestion < question.length) {
    textSize(28);
    text(`Question ${currentQuestion + 1} of ${question.length}`, width / 2, 100);

    textSize(40);
    text(question[currentQuestion].question, 350, 250, 1200, 250);
    textSize(28);
    text(`Score: ${score}`, width / 2, 570);
  } else {
    textSize(50);
    text('Quiz complete!:D', width / 2, 350);
    textSize(36);
    text(`Your score: ${score} / ${question.length}`, width / 2, 450);
  }
}

function checkAnswer(selectedOption) {
  if (currentQuestion >= question.length) return;

  if (selectedOption === question[currentQuestion].answer) {
    score++;
  }

  currentQuestion++;
  updateButtons();
}

function updateButtons() {
  if (currentQuestion >= question.length) {
    buttons.forEach(button => button.hide());
    restartButton.show();
    return;
  }

  restartButton.hide();
  buttons.forEach((button, index) => {
    button.html(question[currentQuestion].options[index]);
    button.show();
  });
}

function restartQuiz() { // restart de quiz en haalt alles opnieuw
  currentQuestion = 0;
  score = 0;
  updateButtons();

 
}
  


  