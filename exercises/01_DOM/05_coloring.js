// colorGeneration(generationNum) ->
// - colors a specific generation of the DOM tree
// - generation = set of elements on the same level of indentation
// - input: non-negative integers
// - add the `.generation-color` CSS class to HTML elements in the given generation

// How to find out if an element is within a specific "generation"?
// - accept element node as argument
// - initialize a counter to 0
// - assign current element to node argument
// - while the current element is not the body element
//  - increment the counter by 1
//  - assign the current element to the parent element
// - return the counter

// walk over all the HTML elements in the DOM tree
// if the current element is in the specified generation
// - add the CSS class of `.generation-color` to the element.

function getGeneration(node) {
  let counter = 0;
  let currentElement = node;

  while(currentElement !== document.body) {
    counter += 1;
    currentElement = currentElement.parentElement;
  }

  return counter;
}

function walk(node, callback) {
  callback(node);
  for (let index = 0; index < node.children.length; index += 1) {
    walk(node.children[index], callback);
  }
}

function colorGeneration(generationNum) {
  if (generationNum === 0) return;

  walk(document.body, node => {
    if (getGeneration(node) === generationNum) {
      node.classList.add('generation-color');
    }
  });
}