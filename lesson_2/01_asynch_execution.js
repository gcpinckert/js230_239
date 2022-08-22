// 1. 
function delayLog() {
  for (let i = 1; i <= 10; i += 1) {
    setTimeout(() => {
      console.log(i);
    }, (i * 1000));
  }
}

// 2.
// setTimeout(() => {      // 1
//   console.log('Once');  // 5
// }, 1000);

// setTimeout(() => {      // 2
//   console.log('upon');  // 7
// }, 3000);

// setTimeout(() => {      // 3
//   console.log('a');     // 6
// }, 2000);

// setTimeout(() => {      // 4
//   console.log('time');  // 8
// }, 4000);

// 3.
// setTimeout(() => {      // 1
//   setTimeout(() => {    // 6
//     q();                // 12
//   }, 15);

//   d();                  // 7

//   setTimeout(() => {    // 8
//     n();                // 10
//   }, 5);

//   z();                  // 9
// }, 10);

// setTimeout(() => {      // 2
//   s();                  // 11
// }, 20);

// setTimeout(() => {      // 3
//   f();                  // 5
// });

// g();                    // 4

// 4.
function afterNSeconds(callback, secs) {
  setTimeout(callback, secs * 1000);
}