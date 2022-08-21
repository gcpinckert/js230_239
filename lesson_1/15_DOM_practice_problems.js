// 1.
let heading = document.querySelector('h1');
heading.classList.add('heading');

// 2.
document.querySelector('#list').classList.add('bulleted'); 

// 3.
let toggleLink = document.querySelector('#toggle');
let notice = document.querySelector('#notice');

toggleLink.onclick = function(e) {
  e.preventDefault();
  
  if (notice.className === 'hidden') {
    notice.className = 'visible';
  } else {
    notice.className = 'hidden';
  }
}

// 4.
notice.onclick = function(e) {
  e.preventDefault();

  this.className = 'hidden';
}

// 5.
let multiplication = document.querySelector('#multiplication');
multiplication.textContent += ` It is ${13 * 9}`;

// 6.
document.querySelector('body').id = 'styled';