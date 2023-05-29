'use strict';

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //when there is no input
  if (!guess) {
    document.querySelector('.start_guessing').textContent = 'No Number!';
  }
  //when player win
  else if (guess === number) {
    document.querySelector('.start_guessing').textContent = 'Correct number!👍';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.question').style.width = '30rem';
    document.querySelector('.question').textContent = number;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.spn2').textContent = highScore;
    }
    //when player guess high or low value
  } else if (guess !== number) {
    if (score > 1) {
      document.querySelector('.start_guessing').textContent =
        guess > number ? 'To High!' : 'To low!';
      score--;
      document.querySelector('.spn').textContent = score;
    } else {
      document.querySelector('.start_guessing').textContent =
        'You lost The Game';
      document.querySelector('.spn').textContent = 0;
    }
  }
});

//reset the game section
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.start_guessing').textContent = 'Start Guessing...';
  document.querySelector('.spn').textContent = score;
  document.querySelector('.question').textContent = '?';
  document.querySelector('.question').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
});
