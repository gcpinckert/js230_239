

function fetchAvailableSchedules() {
  const request = new XMLHttpRequest();
  const availableSchedulesCount = {};
  const content = document.querySelector('#content');

  request.open('GET', 'http://localhost:3000/api/schedules');
  request.responseType = 'json';
  request.timeout = 5000;
  request.send();

  request.addEventListener('load', () => {
    let schedules = request.response;
    if (schedules.length > 0) {
      schedules.forEach(schedule => {
        if (availableSchedulesCount.hasOwnProperty(`staff ${schedule.staff_id}`)) {
          availableSchedulesCount[`staff ${schedule.staff_id}`] += 1;
        } else {
          availableSchedulesCount[`staff ${schedule.staff_id}`] = 1;
        }
      });

      let success = document.createElement('p');
      success.textContent = 'The available schedules are: '
      content.appendChild(success)
      
      Object.keys(availableSchedulesCount).forEach(staff => {
        let p = document.createElement('p');
        p.textContent = `${staff}: ${availableSchedulesCount[staff]}`;
        content.appendChild(p);
      });
    } else {
      let noneAvailable = document.createElement('p');
      noneAvailable.textContent = 'There are no schedules available';
      content.appendChild(noneAvailable);
    }
  });

  request.addEventListener('timeout', event => {
    let p = document.createElement('p');
    p.textContent = 'The request has taken too long, please try again.'
    content.appendChild(p);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  fetchAvailableSchedules();
});