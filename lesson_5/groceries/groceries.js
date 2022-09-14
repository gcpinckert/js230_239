document.addEventListener('DOMContentLoaded', () => {
  const listItem = {
    name: '',
    quantity: '',
  }

  const form = document.querySelector('form');

  form.addEventListener('submit', event => {
    event.preventDefault();

    listItem.name = document.querySelector('#name').value;
    listItem.quantity = document.querySelector('#quantity').value || '1';

    let list = document.querySelector('#grocery-list');
    let li = document.createElement('li');
    li.textContent = `${listItem.quantity} ${listItem.name}`;
    list.appendChild(li);
    form.reset();
  });
});