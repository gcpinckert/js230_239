function calculate(operator, firstNum, secondNum) {
  switch (operator) {
    case '+':
      return (firstNum + secondNum);
    case '-':
      return (firstNum - secondNum);
    case '*':
      return (firstNum * secondNum);
    case '/':
      return (firstNum / secondNum);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  let firstNumInput = document.getElementById('first-num');
  let secondNumInput = document.getElementById('second-num');
  let operatorInput = document.getElementById('operator');

  document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();

    let firstNum = parseFloat(firstNumInput.value, 10);
    let secondNum = parseFloat(secondNumInput.value, 10);

    let calculation = calculate(operatorInput.value, firstNum, secondNum);

    document.getElementById('result').textContent = String(calculation);
  });
});