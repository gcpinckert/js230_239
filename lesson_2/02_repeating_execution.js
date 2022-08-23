let counter;

function startCounting() {
  let num = 0;

  counter = setInterval(() => {
    num += 1;
    console.log(num);
  }, 1000);
}

function stopCounting() {
  clearInterval(counter);
}