# Practice Problems: Promises and Async/Await

[Code Snippets](https://launchschool.com/lessons/519eda67/assignments/61275ea0)

## 1

```javascript
const promise = new Promise(function(resolve, reject) {
  setTimeout(() => { 
    resolve('Launch School');
  }, 2000);
});

promise.then(result => { console.log(result)} );
```

## 2

```javascript
const promise = new Promise(function(resolve, reject) {
  setTimeout(() => { 
    reject(new Error('Not Launch School'));
  }, 2000);
});

promise.catch(err => { console.error(err)} );
```
