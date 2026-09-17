function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  background(225);

 let x = 100 // lett is x en x is

 let greeting = 'Hello world!' 
 let a = 20
 let b = 10
 let y = 80
 let optellen 
 let aftrekken
 let vermenigvuldigen
 let delen

 optellen = a + b
 aftrekken = a - b
 vermenigvuldigen = a * b
 delen = a / b

 text (greeting, 20,60);
 text (x, 20,20);
 text (optellen, 20, y);
 y = y + 20
 text (aftrekken, 20, y);
 y = y + 20
 text (vermenigvuldigen, 20, y);
 y = y + 20
 text (delen, 20,y);

}
