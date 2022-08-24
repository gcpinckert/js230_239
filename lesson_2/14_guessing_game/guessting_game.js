const MAX = 100;

function getRandomAnswer() {
  return Math.floor(Math.random() * MAX) + 1;
}

function validInteger(value) {
  if (/^\d{1,3}$/.test(value)) {
    let num = parseInt(value);
    return (num > 0 && num <= 100);
  } else {
    return false;
  }
}

document.addEventListener('DOMContentLoaded', (event) => {
  let answer = getRandomAnswer();
  let form = document.querySelector('form');
  let input = document.querySelector('#guess');
  let button = document.querySelector('input[type="submit"]');
  let p = document.querySelector('p');
  let guesses = 0;

  form.addEventListener('submit', event => {
    event.preventDefault();
    

    if (validInteger(input.value)) {
      let guess = parseInt(input.value, 10);
      let message;
      guesses += 1;

      if (guess > answer) {
        message = `The answer is lower than ${String(guess)}.`;
      } else if (guess < answer) {
        message = `The answer is higher than ${String(guess)}.`;
      } else {
        message = `You've got it! The answer is ${String(guess)}`;
        button.disabled = true;
      }

      p.textContent = message + '\n' + `You've made ${guesses} guesses`;
    } else {
      p.textContent = `${input.value} is not a valid number. Please try again.`
    }

    
  });

  function newGame(event) {
    event.preventDefault();
    guesses = 0;
    answer = getRandomAnswer();
    button.disabled = false;
    input.value = '';
    p.textContent = 'Guess a number 1-100'
  }

  document.querySelector('a').addEventListener('click', newGame);

  newGame(event);
});