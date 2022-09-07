document.addEventListener('DOMContentLoaded', () => {
  // load all dates with bookings
  let dates = document.getElementById('dates');

  let bookedDatesRequest = new XMLHttpRequest();
  bookedDatesRequest.open('GET', 'http://localhost:3000/api/bookings');
  bookedDatesRequest.responseType = 'json';

  bookedDatesRequest.addEventListener('load', event => {
    let bookedDates = bookedDatesRequest.response;

    if (bookedDates) {
      bookedDates.forEach(date => {
        let li = document.createElement('li');
        li.textContent = date;
        dates.appendChild(li);
      });
    } else {
      alert('Something went wrong');
    }
  });

  bookedDatesRequest.send();

  // add behavior to show booking details
  dates.addEventListener('click', event => {
    event.stopPropagation();
    
    if (event.target.tagName === 'LI') {
      let li = event.target;
      let currentDate = li.textContent;

      let dateDetailsRequest = new XMLHttpRequest();
      dateDetailsRequest.open('GET', `http://localhost:3000/api/bookings/${currentDate}`);
      dateDetailsRequest.responseType = 'json';

      dateDetailsRequest.addEventListener('load', () => {
        let bookings = document.createElement('ul');
        li.appendChild(bookings);
        
        if (dateDetailsRequest.response) {
          dateDetailsRequest.response.forEach(booking => {
            let details = document.createElement('li');
            details.textContent = booking.join(' | ');
            bookings.appendChild(details);
          });
        } else {
          alert('Something went wrong');
        }
      });

      dateDetailsRequest.send();
    }
  });
});