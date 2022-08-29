// randomizer:
// - accepts n callbacks
// - calls each callback and some random point in time between now and (2 * n) seconds from now
// - i.e. if there are 5 callbacks, the function should run them all sometime within 10 seconds
// - log the elapsed time each second

function callback1() {
  console.log('callback1');
}

function callback2() {
  console.log('callback2');
}

function callback3() {
  console.log('callback3');
}

function randomizer(...callbacks) {
  const n = callbacks.length;
  const max_time = 2 * n;

  function randomSeconds() {
    return (Math.floor(Math.random() * max_time)) + 1;
  }

  let counter = 1;

  let secondsInterval = setInterval(() => {
    console.log(counter);
    counter += 1
  }, 1000);

  callbacks.forEach((callback) => {
    let seconds = randomSeconds();
    setTimeout(callback, seconds * 1000);
  });

  setTimeout(() => {
    clearInterval(secondsInterval);
  }, (max_time + 1) * 1000);
}

randomizer(callback1, callback2, callback3);

// Output:
// 1
// 2
// "callback2"
// 3
// "callback3"
// 4
// 5
// "callback1"
// 6