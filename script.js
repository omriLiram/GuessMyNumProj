'use strict';
//creating ifs to guess a number and have a response for it:

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
//document.querySelector('.number').textContent = secretNumber;

document.querySelector('.guess').addEventListener('click', function () {
  const guest = Number(document.querySelector('.guess').value);

  document.querySelector('.guess').textContent = guest;
  document.querySelector('.highscore').value = highScore;

  if (guest === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    score++;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '50rem';

    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = 'correct number';
    document.querySelector('.highscore').textContent = score + highScore;
  } else if (guest > secretNumber) {
    score--;
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = 'lower';
  } else if (guest < secretNumber) {
    score--;
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = 'heigher';
  } else if (guest > 20) {
    document.querySelector('.message').textContent = 'error';
  }
  if (score == 0) {
    document.querySelector('.score').textContent = 'you lost';
  }
  if (score < 0) {
    document.querySelector('.score').textContent = '0';
  }
});

//creating restart option through "agian"

document.querySelector('.again').addEventListener('click', function () {
  const guest = Number(document.querySelector('.guess').value);
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').textContent = '0';
  score = 20;
  document.querySelector('.number').style.width = '15rem';

  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.score').textContent = score;
});
