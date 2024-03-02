let moves = ['-', '-', '-', '-', '-', '-', '-', '-', '-'];

console.log(moves);

a0.onclick = function () {
  a0.textContent = 'X';
  moves[0] = 'X';
  console.log(moves);
};
a0.ondblclick = function () {
  a0.textContent = 'O';
  moves[0] = 'O';
  console.log(moves);
};
a1.onclick = function () {
  a1.textContent = 'X';
  moves[1] = 'X';
  console.log(moves);
};
a1.ondblclick = function () {
  a1.textContent = 'O';
  moves[1] = 'O';
  console.log(moves);
};

a2.onclick = function () {
  a2.textContent = 'X';
  moves[2] = 'X';
  console.log(moves);
};

a2.ondblclick = function () {
  a2.textContent = 'O';
  moves[2] = 'O';
  console.log(moves);
};

b3.onclick = function () {
  b3.textContent = 'X';
  moves[3] = 'X';
  console.log(moves);
};
b3.ondblclick = function () {
  b3.textContent = 'O';
  moves[3] = 'O';
  console.log(moves);
};

b4.onclick = function () {
  b4.textContent = 'X';
  moves[4] = 'X';
  console.log(moves);
};
b4.ondblclick = function () {
  b4.textContent = 'O';
  moves[4] = 'O';
  console.log(moves);
};
b5.onclick = function () {
  b5.textContent = 'X';
  moves[5] = 'X';
  console.log(moves);
};
b5.ondblclick = function () {
  b5.textContent = 'O';
  moves[5] = 'O';
  console.log(moves);
};
c6.onclick = function () {
  c6.textContent = 'X';
  moves[6] = 'X';
  console.log(moves);
};
c6.ondblclick = function () {
  c6.textContent = 'O';
  moves[6] = 'O';
  console.log(moves);
};
c7.onclick = function () {
  c7.textContent = 'X';
  moves[7] = 'X';
  console.log(moves);
};
c7.ondblclick = function () {
  c7.textContent = 'O';
  moves[7] = 'O';
  console.log(moves);
};
c8.onclick = function () {
  c8.textContent = 'X';
  moves[8] = 'X';
  console.log(moves);
};
c8.ondblclick = function () {
  c8.textContent = 'O';
  moves[8] = 'O';
  console.log(moves);
};

resetButton.onclick = function () {
  a0.textContent = '-';
  moves[0] = '-';
  a1.textContent = '-';
  moves[1] = '-';
  a2.textContent = '-';
  moves[2] = '-';
  b3.textContent = '-';
  moves[3] = '-';
  b4.textContent = '-';
  moves[4] = '-';
  b5.textContent = '-';
  moves[5] = '-';
  c6.textContent = '-';
  moves[6] = '-';
  c7.textContent = '-';
  moves[7] = '-';
  c8.textContent = '-';
  moves[8] = '-';
};

checkWinButton.onclick = function () {
  if (moves[0] === 'X') {
    alert('You win');
  }
};
