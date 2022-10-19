# Events

## What is an event

Events are objects representing some kind of action or occurrence that has taken place in the browser. This might consist of a user interaction (such as moving or clicking a mouse) or it might be fired automatically by the browser to signify an environmental change (such as indicating the loading status of a page).

Events are usually attached to a specific item in the browser, such as a DOM element, the HTML `document`, or the global `window` object. For example, when a user clicks a button, the `HTMLButtonElement` that represents it will fire a `click` event in the DOM. This element is known as the event's *target*.

We can define and register *event listeners* to respond to events. These are callbacks that get assigned to specific elements in the DOM and are executed by the browser when the event in question takes place. The event object gets passed to the callback as an argument when it's invoked, and we can use it's properties and methods to gain contextual information about the event and manipulate browser behavior surrounding it.

## What is event delegation

Event delegation is a technique used to increase performance and create cleaner code when registering event listeners. It leverages the capturing and bubbling phases of event propagation in order to allow us to register a single event handler on a parent element, which can be used to manage events fired on any number of child elements.

The issue is that in order to add event handlers to child elements on the DOM, we must wait for the `DOMContentLoaded` event to fired. Meaning, all event handlers (which are callbacks themselves), need to be nested within a larger callback. Not only can this create cluttered code, but it can also introduce timing problems. Furthermore, if our web page is dynamic and adds new elements after the page is completely loaded, event handlers must be added to these new elements manually as they are added to the DOM. This is tedious and error prone. Finally, adding handlers to many elements can lead to complicated code and cause issues with performance (i.e. it can cause the web page to "freeze"). If we later want to remove these event handlers, each on must be removed individually.

Instead of relying on many event handlers for many elements, it is sometimes easier to assign only a single event handler to a container or parent element. Because the event will "touch" this parent element during the capturing and bubbling phases each time an event is fired with a child element target, the single event handler is sufficient to respond appropriately. 

This limits the number of necessary listeners, and ensures that events will be able to be handled for children we dynamically add later on. If we assign a listener to the `document`, we don't even have to wait for the DOM to load.

That being said, the event handler in question might become too complex if it has to handle multiple situations.

## What is bubbling and capturing

Browsers disseminate events throughout the DOM in a process known as event propagation. This occurs in three distinct phases, the first of which is called *capturing* and the last of which is called *bubbling*.

Events are typically attached to a specific item in the browser known as the target. If the target has ancestor elements in the DOM, the event will propagate down all of these ancestors to the target element in the phase known as capturing. Once it reaches the target element, it propagates back up the chain of ancestors to the root element in the phase known as bubbling.

When an event first, first the browser runs the capturing phase. The browser first checks the target's outer-most ancestor (i.e. the `window` object) for any event listeners pertaining to the event in question. If such a listener exists and the optional `useCapture` argument is set to `true`, the event handler is executed. The browser then moves down the DOM tree, checking each ancestor of the target element in its turn.

By default, the browser will continue moving through the propagation process whether or not any event handlers are executed. We can prevent this behavior by calling `stopPropagation` on the `event` object passed as argument to the handler, however.

When the browser reaches the target element, it enters the target phase. Here it checks to see if the target element itself has an event listener registered for the event in question. If it does, the handler is executed.

Next the browser enters the bubbling phase, in which the browser goes back up the DOM tree to the outermost ancestor. Just as in capturing, each element in turn is checked to see if it has an event listener pertaining to the same event. If it does, the event handler is executed. By default, modern browsers are set to invoke associated event handlers during the bubbling phase.

## What is the difference between `event.target` and `event.currentTarget`

The `currentTarget` property of the `event` object always references the element to which an event listener was added, and not necessarily the element that fired the event. The `target` property of the `event` always references the element on which the event occurred (and not necessarily the element that registered the event listener).

For example, if we have the following HTML and JS script:

```html
<div id="container">
  <button id="1">1</button>
  <button id="2">2</button>
  <button id="3">3</button>
</div>
```

```javascript
document.addEventListener('DOMContentLoaded', () => {
  let container = document.getElementById('container');
  container.addEventListener('click', event => {
    console.log(event.target.id);
    console.log(event.currentTarget.id);
  });
});
```

Within the click event listener, the first `console.log` statement will always log the `id` value for whichever element was clicked (`1`, `2`, `3`, or `container`). The second `console.log` statement, on the other hand, will always log `container`, as this is the element to which the event listener is assigned.

## What is the value of `this` within the event handler callback

When using a function expression, the value of `this` within the callback provided to the event listener will have the element the listener was added to as it's value. It is equivalent to `event.currentTarget`.

In the example above we use an arrow function for the callback, which takes it's execution context from it's surrounding scope. However, if we had used a function expression instead, `this` would reference the `div` element with the `id` of `container`.
