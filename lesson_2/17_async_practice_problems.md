# Practice Problems: Promises and Async/Await

[Code Snippets](https://launchschool.com/lessons/519eda67/assignments/61275ea0)

## 1

```javascript
const promise = new Promise(function(resolve, reject) {
  setTimeout(() => { 
    resolve('Launch School');
  }, 2000);
});

promise.then(result => { console.log(result) } );
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

## 3

The code will log `'I am NOT a Promise'` followed by `'I am a Promise'`. This is because promises represent asynchronous actions, which always take place after synchronous ones.

First we instantiate a new promise object on line 1. Within the executor function passed as argument to the `Promise` constructor, we immediately invoke `resolve` with a value of `"I am a Promise"`. This will cause the promise to fulfill immediately with the same string value.

On line 5, we invoke `then` on the promise object, and pass it a callback function. Because the promise resolves immediately, the callback is then moved onto the microtask queue. Synchronous code progression moves down to the next line of code without executing the callback.

The `console.log` statement on line 6 is executed, and `"I am NOT a Promise"` is logged to the console.

At this point, there is no more synchronous code to execute, and the call stack is empty. The event loop moves the callback passed to `then` from the microtask queue onto the call stack and it gets execute. We log the resolved value of the promise, or `'I am a Promise'` to the console.

## 4

On line 1 we instantiate a new Promise object. The executor function passed as argument to the `Promise` constructor is invoked synchronously. When line 2 executes, `'foo'` is logged to the console.

On line 3, we invoke the `resolve()` function. This causes the promise to resolve with a value of `undefined` (since no argument is provided). Just because the promise has resolved doesn't necessarily mean execution is stopped. After the promise resolves, line 4 is executed normally, and `'bar'` is logged to the console.

Because the promise is resolve, the `then` invocation on line 8 is executed asynchronously, and the callback passed as argument is moved onto the microtask queue, where it waits to get moved onto the call stack by the event loop.

Next, we continue to execute synchronous code. The `console.log` statement on line 11 executes, and `'qux'` is logged to the console. When the call stack is empty, the callback passed to `then` is moved from the microtrask queue onto the stack and executed. At this point `'baz'` is logged to the console.

The final output is therefore:

```text
foo
bar
qux
baz
```

## 5

On line 1, we instantiate a new Promise object. The executor function passed as argument to the `Promise` constructor is invoked synchronously. When line 2 executes, `'foo'` is logged to the console.

On line 3, we invoke the `reject()` function. This causes the promise to reject with a value of `undefined` (since no argument is provided). Just because the promise has rejected doesn't necessarily mean execution is stopped. After the promise rejects, line 4 is executed normally, and `'bar'` is logged to the console.

Because the promise has rejected, the `then` invocation on line 8 is skipped, and it's callback is never executed. Instead, execution moves straight onto the `catch` invocation on line 11. This is invoked asynchronously, and the callback passed as argument is moved onto the microtask queue, where it waits to be moved onto the stack by the event loop.

Execution then moves to the next synchronous code, which is the `console.log` statement on line 15. This logs `'abc'` to the console and completes.

At this point, the call stack is empty, and the event loop moves the callback passed to `catch` to the stack where it is executed. The `console.log` statement on line 12 is executed, and `'qux'` is logged to the console.

The final output is therefore:

```text
foo
bar
abc
qux
```

## 6

On line 1, we instantiate a new Promise object. The executor function passed as argument to the `Promise` constructor executes, and the promise immediately resolves with a value of `1`.

The `then` invocation on line 3 is executed. Because there is no more synchronous code, the callback passed as argument is moved immediately to the microtask queue and then the call stack by the event loop. `then` makes the resolved value of the promise available to the callback as an argument, so the value `1` is assigned to `num`. `1` is then logged to the console. We return the value `num + 2`. This is wrapped within a promise, which immediately resolves to the value `3`.

The `then` invocation chained on line 7 is executed. Because there is no more synchronous code, the callback passed as argument is moved immediately to the microtask queue and then the call stack by the event loop. `then` makes the resolved value of the previously returned promise available to the callback as an argument, so the value `3` is assigned to `num`. `3` is then logged to the console, and we return the value `num + 3`. This is wrapped within a promise, which immediately resolves to the value `6`.

Then `then` invocation on line 11 is executed. Like the previous callbacks, the callback passed as argument is immediately moved onto the stack. The resolved value of the previously returned promise (the value `6`) is assigned to `num`. This is logged to the console, and then `num + 4` is returned. As before, this is wrapped within a promise, which immediately resolves to the value `10`.

The `finally` invocation on line 15 is executed. The callback passed to `finally` does not receive any arguments, and so in this case, `num` is set to `undefined`. This is logged to the console, and `num + 5` or `NaN` is returned. The return value of `finally` is always ignored, however, so nothing happens with this value.

The final output is therefore:

```text
1
3
6
undefined
```

## 7

On line 1, we instantiate a new Promise object. The executor function passed as argument executes immediately, and the promise is resolved with a value of `'Got it!'`. Because a promise can only be settled once, any further invocations of `reject` or `resolve` are ignored. Therefore, lines 3 and 4 are not executed.

Because the promise immediately resolves, the `then` invocation on line 8 is executed, and the callback argument gets executed. This gets passed the resolved value ('`Got it!'`) as argument, and then logs this value to the console. Because the promise does not reject, the call to `catch` on line 11 is ignored.

## 8

On lines 1-7 we define a function `after1s` that returns a promise. The executor function of the promise invokes `setTimeout` and causes the promise to resolve to the argument `x` passed to `after1s` after a single second.

On lines 9-13 we define an `async` function `test`. This function declares a constant `a` and initializes it to the value of invoking `after1s` with a value of `2`. Because the `await` keyword is used, execution will pause and wait for the promise returned by the call to `after1s` to resolve. The same occurs on line 11, were `const b` is declared and initialized to the value of invoking `after1s` with a value of `3`. Finally, we return the `input` value passed as argument, multiplied by the values of `a` and `b`. Because an `async` function always returns a promise, this return value will also be wrapped in a promise, which will resolve to the value of the arithmetic function.

On line 15 we invoke the `test` function with an argument of `3`. Within the function, `a` will be assigned to `2` after one second. Then `b` will be assigned to `3` after another second. Finally, `test` returns a promise that resolves to `3 * 2 * 3` or `18`.

When the promise returned by `test` resolves `then` on line 15 will be invoked and the callback executed. This logs the value of the promise, or `18` to the console. 2 seconds (the wait time specified by the 2 calls to `after1s`) have elapsed.

## 9

The additional of two `await` keywords on line 12 makes no changes to the output of the code. `await` tells JavaScript to pause and wait for the promise in question to resolve. However, the promises referenced by `a` and `b` have already resolved, due to the `await` keywords on line 10 and 11. Therefore, no further waiting is necessary. `18` is still logged to the console after 2 seconds.

## 10

On line 21 we invoke the `test1` and pass an argument of `2`. Within the function, constant `a` is declared and initialized to the value returned by `after1s(2, 2000)`. This returns a promise that will resolve to the value of `2` after 2 seconds. Because we use the `await` keyword ahead of the function call, JavaScript will pause execution and wait for the promise to resolve.

Next, we declare constant `b` and initialize it to the value returned by `after1s(3, 2000)`. This returns a promise that will resolve to the value of `3` after 2 seconds. As with line 10, we are using the `await` keyword, which will cause execution to pause until the promise is resolved. So far, 4 seconds have elapsed. On line 12, we return the value `2 * 2 * 3`. Because `test1` is an async function, this is wrapped in a promise. `then` on line 21 will not be invoked until this promise is resolved.

While we wait for the promise returned by `test1` to resolve, we can synchronously execute the invocation to `test2`, which takes `3` as its argument. Within `test2` we declare and assign another constant `a` to the value returned by `after1s(2, 1000)`, which returns a promise that resolves to the value `2` after 1 second. Because we are using the `await` keyword, we have to wait for this promise to resolve before moving to the next line of code. Once we do, we declare a constant `b` and initialize it to the value returned by `after1s(3, 1000)`, which returns a promise that resolves to the value `3` after 1 second. Again we use the `await` keyword, and execution pauses while the promise resolves. On line 18, we return `3 * 2 * 3`, which is wrapped in a promise due to the fact that `test2` is also specified as an `async` function.

The promise that is returned by `test2` will resolve first, since it only has to wait 2 seconds until it can resolve. This causes `then` on line `22` to execute it's callback. The resolved value, `18` is passed to the callback and assigned to `value`, where it is logged to the console.

Next, the promise returned by `test1` will resolve, since it has to wait a total of 4 seconds. When this occurs, `then` on line `21` will execute it's callback. The resolved value, `12` is passed to the callback and assigned to `value`, where it is logged to the console.

The final output will be:

```text
18 (after 2 seconds)
12 (after 4 seconds)
```

## 11

On line 12 we invoke the function `test1`. Within the function, we invoke the `testPromise` function. This instantiates a new promise using the static method `Promise.resolve`, which returns a promise that resolves immediately to the value specified as an argument (in this case, `'1'`). Because the promise returned by `testPromise` resolves right away, `then` is invoked, and the callback provided as argument is moved onto the microtask queue, where it waits for the call stack to empty.

Next (still within the `test1` function), we log the value `'2'` to the console. The function completes, and execution returns to line 12. On line 13, `test2` is invoked synchronously. This logs the value `'3'` to the console, and completes.

At this point, the stack is empty, and the callback passed to `then` on line 4 can be moved from the microtask queue to the stack. At this point, the resolved value of the promise returned by `testPromise` (`'1'`) is logged to the console.

The final output will be:

```text
'2'
'3'
'1'
```

## 12

On line 1, we declare and initialize a constant `test` to the value returned by the static method `Promise.resolve`. This instantiates a new promise that immediately resolves to the value passed as argument, `'A'`. Lines 2-11 consist of an IIFE, which is invoked synchronously. Within the IIFEE, we have an anonymous asynchronous function that defines a `try...catch...finally` statement. In the `try` branch, we log the value of `test` to the console. The `await` keyword is present, but the promise referenced by `test` has already resolved, so we don't have to wait for it to do so. The resolved value, `'A'` is therefore logged to the console. There were no errors, so the `catch` branch is ignored. Then the `finally` branch executes (since it executes regardless of success or failure), and `'B'` is logged to the console. The return value of the anonymous asynchronous function is not utilized.

The final output will be:

```test
A
B
```

## 13

On line 1, we declare and initialize a constant `test` to the value returned by the static method `Promise.reject`. This instantiates a new promise that immediately rejects with the value passed as argument, `'A'`. Lines 3-11 consist of an IIFE, which is invoked synchronously. Similar to the previous code, we have a `try...catch...finally` statement within the IIFE. First we run the code in the `try` statement, which uses `await` to wait for the promise referenced by `test` to settle. However, the promise has already rejected, so the `catch` statement is executed instead. This logs `'E'` to the console. Then, the `finally` branch executes (since it executes regardless of success or failure), and `'B'` is logged to the console.

The final output will be:

```test
E
B
```
