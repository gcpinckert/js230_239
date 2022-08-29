const promise = new Promise(function(resolve, reject) {
  setTimeout(() => { 
    reject(new Error('Not Launch School'));
  }, 2000);
});

promise.catch(err => { console.error(err)} );