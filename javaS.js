'use strict';
let number = Math.trunc(Math.random() * 30) + 1;
document.querySelector('.guess1').textContent = '?';
let score = 30;
let highscore = 0;
// work od check button

document.querySelector('.check').addEventListener('click', function () {
  const ans = Number(document.querySelector('.answer').value);
  if (!ans) {
    document.querySelector('.message').textContent = 'Not a number';
    document.querySelector('section').style.border = '3px solid red';
  } else if (ans == number) {
    document.querySelector('.message').textContent = '🎉 Correct Answer';
    document.querySelector('section').style.border = '3px solid green';
    document.querySelector('.guess1').textContent = number;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else {
    if (score > 1) {
      document.querySelector('.message').textContent =
        ans > number ? '📈 Too High' : '📉 Too Low';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game';
      document.querySelector('.score').textContent = 0;
    }
    document.querySelector('section').style.border = '3px solid red';
  }
});

// work of again button

document.querySelector('.again').addEventListener('click', function () {
  score = 30;
  number = Math.trunc(Math.random() * 30) + 1;
  document.querySelector('.answer').value = '';
  document.querySelector('.message').textContent = '🔍 Start Guessing...';
  document.querySelector('.guess1').textContent = '?';
  document.querySelector('section').style.border = '1px solid #ddd';
  document.querySelector('.score').textContent = score;
});
