document.addEventListener('DOMContentLoaded', () => {
  let textField = document.querySelector('.text-field');
  let content = document.querySelector('.content');
  let cursor;

  textField.addEventListener('click', event => {
    event.stopPropagation();
    textField.classList.add('focused');
    if (cursor === undefined) {
      cursor = setInterval(() => textField.classList.toggle('cursor'), 500);
    }
  });

  document.addEventListener('click', event => {
    textField.classList.remove('focused');
    clearInterval(cursor);
    textField.classList.remove('cursor');
  });

  document.addEventListener('keydown', event => {
    if (/focused/.test(textField.getAttribute('class'))) {
      if (event.key === 'Backspace') {
        textField.textContent = textField.textContent.slice(0, textField.textContent.length - 1);
      } else if (event.key.length === 1) {
        textField.textContent += event.key;
      }
    }
  });
});