let moves = ['-', '-', '-', '-', '-', '-', '-', '-', '-'];

console.log(moves);

a0.onclick = function () {
  a0.textContent = 'X';
  moves[0] = 'X';
  a0.style.backgroundColor = 'lightblue';
  console.log(moves);
};
a0.ondblclick = function () {
  a0.textContent = 'O';
  moves[0] = 'O';
  a0.style.backgroundColor = 'silver';
  console.log(moves);
};
a1.onclick = function () {
  a1.textContent = 'X';
  moves[1] = 'X';
  a1.style.backgroundColor = 'lightblue';
  console.log(moves);
};
a1.ondblclick = function () {
  a1.textContent = 'O';
  moves[1] = 'O';
  a1.style.backgroundColor = 'silver';
  console.log(moves);
};

a2.onclick = function () {
  a2.textContent = 'X';
  moves[2] = 'X';
  a2.style.backgroundColor = 'lightblue';
  console.log(moves);
};

a2.ondblclick = function () {
  a2.textContent = 'O';
  moves[2] = 'O';
  a2.style.backgroundColor = 'silver';
  console.log(moves);
};

b3.onclick = function () {
  b3.textContent = 'X';
  moves[3] = 'X';
  b3.style.backgroundColor = 'lightblue';
  console.log(moves);
};
b3.ondblclick = function () {
  b3.textContent = 'O';
  moves[3] = 'O';
  b3.style.backgroundColor = 'silver';
  console.log(moves);
};

b4.onclick = function () {
  b4.textContent = 'X';
  moves[4] = 'X';
  b4.style.backgroundColor = 'lightblue';
  console.log(moves);
};
b4.ondblclick = function () {
  b4.textContent = 'O';
  moves[4] = 'O';
  b4.style.backgroundColor = 'silver';
  console.log(moves);
};
b5.onclick = function () {
  b5.textContent = 'X';
  moves[5] = 'X';
  b5.style.backgroundColor = 'lightblue';
  console.log(moves);
};
b5.ondblclick = function () {
  b5.textContent = 'O';
  moves[5] = 'O';
  b5.style.backgroundColor = 'silver';
  console.log(moves);
};
c6.onclick = function () {
  c6.textContent = 'X';
  moves[6] = 'X';
  c6.style.backgroundColor = 'lightblue';
  console.log(moves);
};
c6.ondblclick = function () {
  c6.textContent = 'O';
  moves[6] = 'O';
  c6.style.backgroundColor = 'silver';
  console.log(moves);
};
c7.onclick = function () {
  c7.textContent = 'X';
  moves[7] = 'X';
  c7.style.backgroundColor = 'lightblue';
  console.log(moves);
};
c7.ondblclick = function () {
  c7.textContent = 'O';
  moves[7] = 'O';
  c7.style.backgroundColor = 'silver';
  console.log(moves);
};
c8.onclick = function () {
  c8.textContent = 'X';
  moves[8] = 'X';
  c8.style.backgroundColor = 'lightblue';
  console.log(moves);
};
c8.ondblclick = function () {
  c8.textContent = 'O';
  moves[8] = 'O';
  c8.style.backgroundColor = 'silver';
  console.log(moves);
};

resetButton.onclick = function () {
  a0.textContent = '-';
  a0.style.backgroundColor = '';
  moves[0] = '-';
  a1.textContent = '-';
  a1.style.backgroundColor = '';
  moves[1] = '-';
  a2.textContent = '-';
  a2.style.backgroundColor = '';
  moves[2] = '-';
  b3.textContent = '-';
  b3.style.backgroundColor = '';
  moves[3] = '-';
  b4.textContent = '-';
  b4.style.backgroundColor = '';
  moves[4] = '-';
  b5.textContent = '-';
  b5.style.backgroundColor = '';
  moves[5] = '-';
  c6.textContent = '-';
  c6.style.backgroundColor = '';
  moves[6] = '-';
  c7.textContent = '-';
  c7.style.backgroundColor = '';
  moves[7] = '-';
  c8.textContent = '-';
  c8.style.backgroundColor = '';
  moves[8] = '-';
};

checkWinButton.onclick = function () {
  if (moves[0] === 'X' && moves[1] === 'X' && moves[2] === 'X') {
    alert('X wins');
  } else if (moves[0] !== 'X' && moves[1] !== 'X' && moves[2] !== 'X') {
    alert('O wins');
  } else if (moves[3] === 'X' && moves[4] === 'X' && moves[5] === 'X') {
    alert('X wins');
  } else if (moves[3] !== 'X' && moves[4] !== 'X' && moves[5] !== 'X') {
    alert('O wins');
  } else if (moves[6] === 'X' && moves[7] === 'X' && moves[8] === 'X') {
    alert('X wins');
  } else if (moves[6] !== 'X' && moves[7] !== 'X' && moves[8] !== 'X') {
    alert('O wins');
  } else if (moves[0] === 'X' && moves[3] === 'X' && moves[6] === 'X') {
    alert('X wins');
  } else if (moves[0] !== 'X' && moves[3] !== 'X' && moves[6] !== 'X') {
    alert('O wins');
  } else if (moves[1] === 'X' && moves[4] === 'X' && moves[7] === 'X') {
    alert('X wins');
  } else if (moves[1] !== 'X' && moves[4] !== 'X' && moves[7] !== 'X') {
    alert('O wins');
  } else if (moves[2] === 'X' && moves[5] === 'X' && moves[8] === 'X') {
    alert('X wins');
  } else if (moves[2] !== 'X' && moves[5] !== 'X' && moves[8] !== 'X') {
    alert('O wins');
  } else if (moves[0] === 'X' && moves[4] === 'X' && moves[8] === 'X') {
    alert('X wins');
  } else if (moves[0] !== 'X' && moves[4] !== 'X' && moves[8] !== 'X') {
    alert('O wins');
  } else if (moves[2] === 'X' && moves[4] === 'X' && moves[6] === 'X') {
    alert('X wins');
  } else if (moves[2] !== 'X' && moves[4] !== 'X' && moves[6] !== 'X') {
    alert('O wins');
  } else {
    alert("It's a draw, lets play again");
  }
};
