document.querySelector('html').addEventListener('click', () => {
  document.querySelector('#container').style = 'display: none';
}, true);

document.querySelector('#container').addEventListener('click', () => {
  document.querySelector('#container').style = 'display: visible';
});