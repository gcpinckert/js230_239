document.addEventListener('DOMContentLoaded', () => {
  let main = document.querySelector('main');
  let sub = document.querySelector('section');

  main.addEventListener('contextmenu', (event) => {
    event.preventDefault();
    alert('Main');
  });

  sub.addEventListener('contextmenu', (event) => {
    event.preventDefault();
    event.stopPropagation();
    alert('sub');
  })
});