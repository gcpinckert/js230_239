// populate select field with available schedules
// create event listener for book-schedule form submission
  // check to see if provided email exists in the database
    // if yes, set student email field of selected schedule
    // if not:
      // save booking sequence in response body
      // populate new form for adding new student

// adding a new student
  // populate form with email, name, and booking sequence fields
  // booking sequence should automatically have value from earlier response
  // add event listener that adds new student via POST request when form submits

// upon submitting new student, both requests should complete (nested)


document.addEventListener('DOMContentLoaded', () => {
  // load staff members
    let staff = {
    members: [],
    findNameById(id) {
      let member = this.members.find(staffData => staffData.id === id );
      return member.name;
    }
  };
  let request = new XMLHttpRequest();
  request.open('GET', 'http://localhost:3000/api/staff_members');
  request.responseType = 'json';

  request.addEventListener('load', event => {
    if (request.response) {
      request.response.forEach(staffMember => {
        staff.members.push(staffMember);
      });
    } else {
      console.log('There was a problem retrieving the staff');
    }
  });

  request.send();

  // get available schedules
  let schedulesRequest = new XMLHttpRequest();
  schedulesRequest.open('GET', 'http://localhost:3000/api/schedules');
  schedulesRequest.responseType = 'json';

  schedulesRequest.addEventListener('load', event => {
    let schedules = schedulesRequest.response;
    let availableSchedules = schedules.filter(schedule => {
      return schedule.student_email === null;
    });

    availableSchedules.forEach(schedule => {
      let scheduleStr = `${staff.findNameById(schedule.staff_id)} | ${schedule.date} | ${schedule.time}`;

      let selectSchedules = document.getElementById('select-schedules');
      let option = document.createElement('option');
      option.setAttribute('value', JSON.stringify(schedule));
      option.textContent = scheduleStr;
      selectSchedules.appendChild(option);
    });
  });

  schedulesRequest.send();

  // handle schedule booking form submission
  let bookingForm = document.getElementById('book-schedule');
  bookingForm.addEventListener('submit', event  => {
    event.preventDefault();

    let bookSchedule = new XMLHttpRequest();
    bookSchedule.open('POST', 'http://localhost:3000/api/bookings');
    bookSchedule.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

    let schedule = JSON.parse(bookingForm.elements[0].value);
    let email = bookingForm.elements[1].value;
    let bookScheduleData = {
      id: schedule.id,
      student_email: email,
    };

    let bookScheduleJson = JSON.stringify(bookScheduleData);
    bookSchedule.send(bookScheduleJson);

    // handle booking response
    bookSchedule.addEventListener('load', event => {
      alert(bookSchedule.response || 'Booked!');

      if (bookSchedule.response.match('Student does not exist;')) {
        let bookingSequence = parseInt(bookSchedule.response.slice(-6), 10);
        
        let newStudentForm = document.createElement('form');
        newStudentForm.classList.add('styled-form', 'side-by-side');
        bookingForm.insertAdjacentElement('afterend', newStudentForm);

        let title = document.createElement('h1');
        newStudentForm.insertAdjacentElement('beforebegin', title);
        
        let descriptionList = document.createElement('dl');
        newStudentForm.appendChild(descriptionList);

        descriptionList.appendChild(document.createElement('dt'));
        let newEmailLabel = document.createElement('label');
        newEmailLabel.setAttribute('for', 'new-email');
        newEmailLabel.textContent = 'Email: '
        descriptionList.lastChild.appendChild(newEmailLabel);

        descriptionList.appendChild(document.createElement('dd'));
        let newEmailInput = document.createElement('input');
        newEmailInput.setAttribute('type', 'text');
        newEmailInput.setAttribute('id', 'new-email');
        newEmailInput.setAttribute('name', 'new-email');
        newEmailInput.setAttribute('value', email);
        newEmailInput.setAttribute('readonly', 'readonly');
        descriptionList.lastChild.appendChild(newEmailInput);

        descriptionList.appendChild(document.createElement('dt'));
        let nameLabel = document.createElement('label');
        nameLabel.setAttribute('for', 'name');
        nameLabel.textContent = 'Name: '
        descriptionList.lastChild.appendChild(nameLabel);

        descriptionList.appendChild(document.createElement('dd'));
        let nameInput = document.createElement('input');
        nameInput.setAttribute('type', 'text');
        nameInput.setAttribute('id', 'name');
        nameInput.setAttribute('name', 'name');
        descriptionList.lastChild.appendChild(nameInput);

        descriptionList.appendChild(document.createElement('dt'));
        let bookingSequenceLabel = document.createElement('label');
        bookingSequenceLabel.setAttribute('for', 'booking_sequence');
        bookingSequenceLabel.textContent = 'Booking Sequence: '
        descriptionList.lastChild.appendChild(bookingSequenceLabel);

        descriptionList.appendChild(document.createElement('dd'));
        let bookingSequenceInput = document.createElement('input');
        bookingSequenceInput.setAttribute('type', 'text');
        bookingSequenceInput.setAttribute('id', 'booking-sequence');
        bookingSequenceInput.setAttribute('name', 'booking_sequence');
        bookingSequenceInput.setAttribute('value', bookingSequence);
        bookingSequenceInput.setAttribute('readonly', 'readonly');
        descriptionList.lastChild.appendChild(bookingSequenceInput);

        let submitNewStudent = document.createElement('button');
        submitNewStudent.classList.add('submit');
        submitNewStudent.textContent = 'Submit';
        newStudentForm.appendChild(submitNewStudent);

        // handle submission of new student form
        newStudentForm.addEventListener('submit', event => {
          event.preventDefault();

          let newStudentRequest = new XMLHttpRequest();
          newStudentRequest.open('POST', 'http://localhost:3000/api/students');
          newStudentRequest.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

          let newStudentData = {
            email: email,
            name: nameInput.value,
            booking_sequence: bookingSequence,
          }
          let newStudentJson = JSON.stringify(newStudentData);

          newStudentRequest.addEventListener('load', event => {
            alert(newStudentRequest.response);
            
            let newBookingRequest = new XMLHttpRequest();
            newBookingRequest.open('POST', 'http://localhost:3000/api/bookings');
            newBookingRequest.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

            newBookingRequest.addEventListener('load', event => {
               if (newBookingRequest.status === 204) {
                alert('Booked!');
               }
            });

            newBookingRequest.send(bookScheduleJson);
          });

          newStudentRequest.send(newStudentJson);
        });
      }
    });
  });

});