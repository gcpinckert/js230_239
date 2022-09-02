// Using FormData to serialize the form's data
document.addEventListener('DOMContentLoaded', () => {
  let form = document.getElementById('form');

  form.addEventListener('submit', event => {
    // prevent the browser from submitting the form
    event.preventDefault();

    let data = new FormData(form);

    let request = new XMLHttpRequest();
    request.open('POST', 'https://ls-230-book-catalog.herokuapp.com/books');

    request.addEventListener('load', () => {
      if (request.status === 201) {
        console.log(`This book was added to the catalog: ${request.responseText}`);
      }
    });

    request.send(data);
  })
});





// manually setting the URL encoding -> bad practice
// ################################################################################################
// document.addEventListener('DOMContentLoaded', () => {
//   let form = document.getElementById('form')

//   // Bind to the form's submit event to handle the submit button
//   // being clicked, enter being pressed within an input
//   form.addEventListener('submit', event => {
//     // prevent the browser form submitting the form
//     event.preventDefault();

//     // access the inputs using form.elements and serialize into a string
//     let keysAndValues = [];

//     for (let index = 0; index < form.elements.length; index += 1) {
//       let element = form.elements[index];
//       let key;
//       let value;

//       if (element.type !== 'submit') {
//         key = encodeURIComponent(element.name);
//         value = encodeURIComponent(element.value);
//         keysAndValues.push(`${key}=${value}`);
//       }
//     }

//     let data = keysAndValues.join('&');

//     // submit the data
//     let request = new XMLHttpRequest();
//     request.open('POST', 'https://ls-230-book-catalog.herokuapp.com/books');
//     request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

//     request.addEventListener('load', () => {
//       if (request.status === 201) {
//         let addedBook = `This book was added to the catalog: ${request.responseText}`;
//         console.log(addedBook);
//         let p = document.createElement('p');
//         p.textContent = addedBook;
//         form.insertAdjacentElement('afterend', p);
//       }
//     });

//     request.send(data);
//   });
// });