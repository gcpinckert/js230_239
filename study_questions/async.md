# Asynchronous Programming

## What is the Asynchronous Programming Model

The asynchronous programming model is a multithreaded model that has a non-blocking architecture. That is, it does not block subsequent execution of code while an operation is in progress. Instead, it can run multiple tasks concurrently in parallel. This makes it useful in networking and communications contexts, where operations feature time intensive operations that could benefit from this non-blocking behavior.

## How is asynchronous code useful

JavaScript utilizes a synchronous programming model. That is, one in which a single-thread follows a sequential set of steps. Each operation within a program is performed one at a time, in the order specified by the code. While an operation is in progress, the subsequent execution of code must wait until the operation in question is complete. This can create blocking, a situation in which a time intensive or computationally expensive process "blocks" the subsequent code from executing until the process is complete. This is a concern when it comes to any kind of code that is slow, for example image processing or network requests.

Asynchronous code execution helps us solve this problem, most notably because it increases the speed of response times for dynamic web applications. For example, when fetching data with a network request, we can avoid waiting for the server to respond by executing the code that issues the network request asynchronously. This ensures that the code execution can continue along with the next steps in the program, and the asynchronous code waits for the server to respond in the background.

## How does `setTimeout` work

`setTimeout` is a function made available in JavaScript via the browser environment. It takes two arguments:

- a callback function
- a time to wait (specified in milliseconds)

When invoked, the `setTimeout` function is pushed onto JavaScript's single call stack. This causes a timer to be set for the specified time in the Web API's component of the browser environment, which has it's own separate call stack. At this point, `setTimeout` has completed it's synchronous action and can be popped off the stack, which allows code execution to continue while the timer counts down.

Once the specified time has elapse, the callback passed to `setTimeout` can be executed. It cannot necessarily be executed right away, however, because it is asynchronous, and must wait for JavaScripts single call stack to be empty. This process is managed by the Event Loop. When the time in question has elapsed, the Web APIs adds the callback function to the task queue. This has a first in, first out structure. As soon as synchronous code completes, and the JavaScript call stack is empty, the event loop moves the callback from the task queue to the call stack, where it can be executed.

This allows us to define actions (represented by the callback argument) which can be delayed for a specified amount of time.

## `setTimeout` Code Snippets

```javascript
function delayLog() {
  for (let idx = 1; idx <= 10; idx += 1) {
    setTimeout(function() {
      console.log(idx);
    }, 1000);
  }
} 

delayLog();
```

The code above defines a function called `delayLog`. Within the function, we initialize a `for` loop that iterates 10 times. Each time the loop iterates, we invoke `setTimeout` and pass it a callback that logs the current index. The execution of the callback will be delayed by 1 second for each iteration for the loop.The invocation of `setTimeout` within the loop is synchronous code. Once the loop finishes iterating, the `delayLog` function is complete, and can be pushed off the stack.

There are 10 timers counting 1 second in the WebAPIs section of the browser environment. As each timer elapses, an instance of the callback function passed to `setTimeout` is moved into the task queue. This has a first-in, first-out structure. Since the call stack is empty, the first function (which has an `idx` of `1` accessible via closure), can be moved onto the stack by the event loop. The function then executes, and logs `1` to the console. Once that is complete, and the stack is again empty, the second function gets pushed onto the stack by the event loop. This has an `idx` value of `2`, which is logged to the console. As each function completes, the next in the queue is moved onto the call stack, which eventually gives us an output of:

```text
1
2
3
4
5
6
7
8
9
10
```

```javascript
function delayLog() {
  for (let idx = 1; idx <= 10; idx += 1) {
    console.log(idx);
    setTimeout(function() {
      console.log(idx);
    }, 1000);
  }
}

delayLog();
```

This code functions much like the previous snippet. The difference here is that we log `idx` to the console synchronously before executing `setTimeout`. This means that `1`-`10` will be logged to the console both immediately, and agian after the delay specified with `setTimeout`.

**Note**: Because we are declaring the `idx` variable with `let`, a new variable is created each time we iterate the loop (this is because `let` variables have block level scope). However, declaring the variable with `var` would create a *function scoped variable*. This means that it would not be created anew each time the loop iterates. The result of this is that instead of logging `1`-`10`, all 10 callbacks supplied to `setTimeout` would log `11`, the value of `idx` after all iterations of the loop have taken place.

```javascript
console.log('Hi!');

setTimeout(function someCallBack() {
  console.log("I'm the callback!");
}, 0);

console.log('I execute before the setTimeout function!');
```

Above we have both synchronous and asynchronous code. First, we execute the `console.log` statement on line 1. This logs `'Hi!'` to the console synchronously, and completes. Execution continues.

Next we invoke `setTimeout`, passing it a callback function and a time argument of `0`. The callback function is moved to the separate environment of the Web APIs in the browser environment, where a timer is set to `0`. This immediately completes, and the the callback is moved to the task queue. However, the event loop cannot move the callback from the task queue onto the stack until the stack is empty, which is not the case.

Execution continues on to the next invocation of `console.log`. This logs `'I execute before the setTimeout function!'` to the console, and completes.

At this point, all synchronous code has executed, and the call stack is empty. The event loop can move the callback passed to `setTimeout` that's waiting in the task queue onto the stack. This occurs and the callback is executed, logging `"I'm the callback!"` to the console.

This demonstrates that synchronous code is always executed before asynchronous code.

## What is the event loop

The Event Loop is a component of the JavaScript runtime environment. It is responsible for monitoring both the call stack and the task queue, and pushing any asynchronous callbacks waiting in the queue onto the call stack when it is empty.

First, any synchronous functions are executed. Asynchronous functions such as `setTimeout` are provided with callbacks that should be executed when the asynchronous function completes. Since the browser's Web API component contains it's own separate call stack, asynchronous processes along with their callback functions are moved there, so that they can execute concurrently with any subsequent synchronous code.

When the asynchronous function completes, the callback is moved to the task queue, where it is monitored by the Event Loop. Each task in the queue is moved onto the call stack when it is empty in a first-in, first-out pattern.
