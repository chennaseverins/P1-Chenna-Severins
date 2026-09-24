let board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];
let currentPlayer = 'X';
let gameMessage = '';
let gameOver = false;

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background('yellow');

  fill('black');
  square(120, 100, 600, 50);

  fill('white');
  for (let row = 0; row < 3; row++) {
    for (let column = 0; column < 3; column++) {
      square(150 + column * 200, 150 + row * 180, 140, 20);
    }
  }

  fill('purple');
  textAlign(CENTER, CENTER);
  textSize(100);
  for (let row = 0; row < 3; row++) {
  
    for (let column = 0; column < 3; column++) {
      text(board[row][column], 220 + column * 200, 240 + row * 180);
    }
  }

  textSize(27);
  text(gameMessage || `Player ${currentPlayer}'s turn`, 400, 50);
}

function mousePressed() {
  if (gameOver) {
    return;
  }

  if (mouseX < 150 || mouseX > 690 || mouseY < 150 || mouseY > 650) {
    return;
  }

  let column = floor((mouseX - 150) / 200);
  let row = floor((mouseY - 150) / 180);

  if (column < 3 && row < 3 && board[row][column] === '') {
    board[row][column] = currentPlayer;

    if (hasWinner(currentPlayer)) {
      gameMessage = `Player ${currentPlayer} wins!:D`;
      gameOver = true;
      setTimeout(resetGame, 1000);
      return;
    }

    if (boardIsFull()) {
      gameMessage = 'Tie game!^^';
      gameOver = true;
      setTimeout(resetGame, 1000);
      return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }
}

function hasWinner(player) {
  for (let row = 0; row < 3; row++) {
    if (board[row][0] === player && board[row][1] === player && board[row][2] === player) {
      return true;
    }
  }

  for (let column = 0; column < 3; column++) {
    if (board[0][column] === player && board[1][column] === player && board[2][column] === player) {
      return true;
    }
  }

  return (board[0][0] === player && board[1][1] === player && board[2][2] === player) ||
    (board[0][2] === player && board[1][1] === player && board[2][0] === player);
}

function boardIsFull() {
  for (let row = 0; row < 3; row++) {
    for (let column = 0; column < 3; column++) {
      if (board[row][column] === '') {
        return false;
      }
    }
  }

  return true;
}

function resetGame() {
  board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
  currentPlayer = 'X';
  gameMessage = '';
  gameOver = false;
}
