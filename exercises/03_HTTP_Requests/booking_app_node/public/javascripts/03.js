document.addEventListener('DOMContentLoaded', () => {
  let form = document.getElementById('new-staff');
  let data = [];

  form.addEventListener('submit', event => {
    event.preventDefault();
    let data = {};

    for (let i = 0; i < form.elements.length; i += 1) {
      let element = form.elements[i];
      if (element.type !== 'submit') {
        data[element.name] = element.value;
      }
    }

    let json = JSON.stringify(data);

    let request = new XMLHttpRequest();
    request.open('POST', 'http://localhost:3000/api/staff_members');
    request.setRequestHeader("Content-Type", "application/json; charset=utf-8");

    request.addEventListener('load', () => {
      if (request.status === 201) {
        let response = JSON.parse(request.response);
        let message = `Successfully created staff with id of ${response.id}`;
        alert(message);
      } else {
        alert('Something went wrong.');
      }
    });

    request.send(json);
  });
});