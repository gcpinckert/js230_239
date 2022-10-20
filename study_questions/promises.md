# Promises

## What is a promise

A `Promise` is a JavaScript object that represents a forthcoming value. That is, it represents the eventual completion (either success or failure) of an asynchronous operation and the value that results from that completion.

The accomplish the same basic goal as providing callbacks via the event loop, however they have some additional features and a more natural syntax. This helps us avoid some of the pitfalls of the callback approach (such as the "pyramid of doom").

## How do promises work

Promises have three possible states:

- **Pending**: the initial state, during which the promise "waits" for the asynchronous operation in question to complete.
- **Fulfilled**: the asynchronous operation in question has completed successfully, and the promise has *resolved*. It now contains a value that represents the completion of the async operation, for example, response data from a request send to an API.
- **Rejected**: the asynchronous operation in question has failed, and the promise has *rejected*. It now contains a value that contains a reason for the failure (such as an `Error` object).

When a promise becomes *either* fulfilled or rejected it is said to be **settled**.

When promises are created they take a callback function as argument known as an **executer function**. This is invoked synchronously, and is uses to wrap some kind of asynchronous task. The executor takes two arguments, `resolve` and `reject`, which are built in JS functions that can be used to either resolve or reject the promise when called. They take a single argument, which becomes the value represented by the promise when it becomes settled. If the executor never invokes either argument, the promise will remain in a pending state.

A promise can only be settled once. Once a promise is either fulfilled or rejected, it cannot be fulfilled or rejected again with a different value, nor can it switch from one to the other. This means that for each promise, there can only be a single result or error.

## How do we use promises

Promises are typically returned from asynchronous calls to Web APIs (such as `Fetch`). We consume them using JavaScript with the `then`, `catch` and `finally` methods made available as part of the `Promise` interface. These each take callback functions as arguments, which allows us to specify actions that should occur depending on whether or not the promise was successful.

If we invoke `.then` on a promise object, it is executed when the promise fulfills. It takes two arguments, the first of which is a callback that is executed if the promise in question fulfills successfully. The second is executed if the promise rejects. Generally we use them with the first argument, as rejection cases can also be handled with `catch`.

If the promise fulfills and `then` is invoked, it executes the provided callback argument and passes the response (or other fulfillment value) to the callback as an argument. We can then process this response within the callback. If there are other asynchronous actions that must take place, we can create a chain of `then` invocations to handle each in it's turn. This is because `then` returns a pending promise object that we can use to progress down the chain.

If we invoke `.catch` on a promise object, it is executed if the promise rejects. Rejected promises skip all calls to `then` on the chain and move straight down to the `catch` invocation. This also takes a callback, which we can use for error handling. `catch` passes the error object (or other rejection value) to the callback. Just like `then`, `catch` also returns a pending promise that can be use to chain further calls to handle various asynchronous tasks.

`finally` is always invoked when a promise settles, regardless of rejection or fulfillment. It's return value is ignored, and it's mostly used for general cleanup purposes.

## Promise Code Snippets

