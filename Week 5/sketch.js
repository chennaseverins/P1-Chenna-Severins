function setup() {
  createCanvas(1900, 1080);
}



function draw() {
  background('purple');
  rect(300, 700, 300, 100,30); // dit is waar de antwoorden komen te staan
  rect(300, 900, 300, 100,30);
  rect(1200, 700, 300, 100,30);
  rect(1200, 900, 300, 100,30);
  rect(750, 100, 300, 300,30);
  rect(660, 450, 500, 200,30);

  question = [
  {
    'question': 'what is the name of this character?',
    'options': ['A) Pusher', 'B) Jaeger', 'C) Pitcher', 'D) Big grunt'], // dit is de eerste vraag
    'answer': 'B',
  },
  {
    'question': 'who is the best prime asset?',
    'options': ['A) mother gooseberry', 'B) franco barbino', 'C) Leland Coyle', 'D) The Kress twins'], // dit is de tweede vraag
    'answer': 'C'
  }
  ]
}
  


  