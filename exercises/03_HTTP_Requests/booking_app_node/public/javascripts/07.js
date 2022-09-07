function cancelSchedule(scheduleId) {
  let request = new XMLHttpRequest();
  request.open('DELETE', `http://localhost:3000/api/schedules${scheduleId}`);

  request.addEventListener('load', () => {
    if (request.status === 204) {
      alert(`Schedule id ${scheduleId} removed`);
    } else {
      alert(request.responseText);
    }
  });

  request.send();
};

function cancelBooking(bookingId) {
  let request = new XMLHttpRequest();
  request.open('PUT', `http://localhost:3000/api/bookings/${bookingId}`);

  request.addEventListener('load', () => {
    if (request.status === 204) {
      alert(`Booking id ${bookingId} removed`);
    } else {
      alert(request.responseText);
    }
  });

  request.send();
}

document.addEventListener('DOMContentLoaded', () => {

});