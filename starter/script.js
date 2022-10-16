'use strict';

// document.querySelector('.message').textContent = 'Correct number!';
let check = document.querySelector('.check');
let again = document.querySelector('.again');
check.addEventListener('click', verify);
again.addEventListener('click', repeat);
let random_value = Math.round(Math.random() * 19 + 1);
console.log(random_value);
// document.querySelector('.number').textContent = random_value;

function verify() {
  const user_value = document.querySelector('input').value;
  const message = document.querySelector('.message');

  console.log(user_value);

  if (user_value >= 1 && user_value <= 20) {
    if (user_value > random_value) {
      message.textContent = 'Too high!';
      document.body.style.backgroundColor = 'red';
      update_score();
    } else if (user_value < random_value) {
      message.textContent = 'Too low!';
      document.body.style.backgroundColor = 'red';
      update_score();
    } else {
      message.textContent = 'Correct number!';
      document.querySelector('.number').textContent = random_value;
      document.body.style.backgroundColor = 'green';
      high_score();
      setTimeout(repeat, 5000);
    }
  } else {
    message.textContent = 'Enter number Between 1 and 20!';
  }
}

function repeat() {
  document.querySelector('.score').textContent = '20';
  document.body.style.backgroundColor = 'rgb(34,34,34)';
  document.querySelector('input').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  random_value = Math.round(Math.random() * 19 + 1);
  console.log(random_value);
}
function update_score() {
  let score = document.querySelector('.score').textContent;
  let final_score = String(Number(score) - 1);
  document.querySelector('.score').textContent = final_score;
  if (final_score == 0) {
    document.querySelector('.message').textContent = 'You lost!';
    setTimeout(repeat, 2000);
  }
}

function high_score() {
  let high_score = document.querySelector('.highscore');
  let score = document.querySelector('.score').textContent;
  if (Number(high_score.textContent) < Number(score)) {
    high_score.textContent = score;
  }
}
