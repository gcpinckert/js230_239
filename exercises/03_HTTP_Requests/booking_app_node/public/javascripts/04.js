const nextScheduleID = function() {
  let id = 0;
  return function() {
    id += 1;
    return id;
  }
}();

function makeScheduleForm(staff) {
  let id = nextScheduleID();
  let fieldset = document.createElement('fieldset');
  fieldset.setAttribute('id', `schedule${id}`);
  let form = document.getElementById('schedules');
  form.appendChild(fieldset);

  let title = document.createElement('p');
  title.textContent = `Schedule ${id}`;
  fieldset.appendChild(title);

  let descriptionList = document.createElement('dl');
  fieldset.appendChild(descriptionList);

  // add staff name select field
  descriptionList.appendChild(document.createElement('dt'));
  let staffLabel = document.createElement('label');
  staffLabel.setAttribute('for', 'staffName');
  staffLabel.textContent = 'Staff Name: ';
  descriptionList.firstChild.appendChild(staffLabel);

  descriptionList.appendChild(document.createElement('dd'));
  let staffSelect = document.createElement('select');
  staffSelect.setAttribute('name', 'staffName');
  descriptionList.lastChild.appendChild(staffSelect);

  staff.forEach(staffMember => {
    let name = staffMember.name;
    let option = document.createElement('option');
    option.setAttribute('value', name);
    option.textContent = name;
    staffSelect.appendChild(option);
  });

  // retrieve staff member names
  // let request = new XMLHttpRequest();
  // request.open('GET', 'http://localhost:3000/api/staff_members');

  // request.addEventListener('load', event => {
  //   let data = JSON.parse(request.response);

  //   data.forEach(staffMember => {
  //     let name = staffMember.name;
  //     let option = document.createElement('option');
  //     option.setAttribute('value', name);
  //     option.textContent = name;
  //     staffSelect.appendChild(option);
  //   });
  // });

  // request.send();

  // add date input field
  descriptionList.appendChild(document.createElement('dt'));
  let dateLabel = document.createElement('label');
  dateLabel.setAttribute('for', 'date');
  dateLabel.textContent = 'Date: '
  descriptionList.lastChild.appendChild(dateLabel);

  descriptionList.appendChild(document.createElement('dd'));
  let dateInput = document.createElement('input');
  dateInput.setAttribute('type', 'date');
  dateInput.setAttribute('id', 'date');
  dateInput.setAttribute('name', 'date');
  descriptionList.lastChild.appendChild(dateInput);

  // add time input field
  descriptionList.appendChild(document.createElement('dt'));
  let timeLabel = document.createElement('label');
  timeLabel.setAttribute('for', 'time');
  timeLabel.textContent = 'Time: '
  descriptionList.lastChild.appendChild(timeLabel);

  descriptionList.appendChild(document.createElement('dd'));
  let timeInput = document.createElement('input');
  timeInput.setAttribute('type', 'time');
  timeInput.setAttribute('id', 'time');
  timeInput.setAttribute('name', 'time');
  descriptionList.lastChild.appendChild(timeInput);
}

document.addEventListener('DOMContentLoaded', () => {
  let staffs = [];

  function findIdByName(name, arr) {
    let obj = arr.find((ele) => ele.name === name);
    return obj.id;
  }

  let staffRequest = new XMLHttpRequest();
  staffRequest.open('GET', 'http://localhost:3000/api/staff_members');
  staffRequest.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

  staffRequest.addEventListener('load', () => {
    staffs = JSON.parse(staffRequest.response);
    makeScheduleForm(staffs);
  });

  staffRequest.send();
  
  let addScheduleButton = document.getElementById('addSchedule');
  let form = document.getElementById('schedules');

  addScheduleButton.addEventListener('click', event => {
    event.preventDefault();
    makeScheduleForm(staffs);
  });

  form.addEventListener('submit', event => {
    event.preventDefault();

    let formData = { schedules: []};

    let formFields = Array.prototype.slice.call(form.elements);
    let staffNames = formFields.filter(element => element.name === 'staffName');
    let dates = formFields.filter(element => element.name === 'date');
    let times = formFields.filter(element => element.name === 'time');

    staffNames.forEach((name, idx) => {
      let newSchedule = {
        staff_id: findIdByName(name.value, staffs),
        date: dates[idx].value,
        time: times[idx].value,
      }

      formData.schedules.push(newSchedule);
    });

    let request = new XMLHttpRequest();
    request.open('POST', 'http://localhost:3000/api/schedules');
    request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
    let json = JSON.stringify(formData);
    
    request.addEventListener('load', event => {
        alert(request.responseText);
    });

    request.send(json);
  });
});