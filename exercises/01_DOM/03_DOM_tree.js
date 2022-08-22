// input: element id value
// output: a representation of the DOM tree for the corresponding element
// - should be in the form of a two dimensional array
// - first subarray contains the element and its siblings
// - the second contains the parent of the element and its siblings
// - etc until we get up to the element with an ID of 1

domTreeTracer(1);  // [["ARTICLE"]]
domTreeTracer(2);  // [["HEADER", "MAIN", "FOOTER"], ["ARTICLE"]]
domTreeTracer(22); // [["A"], ["STRONG"], ["SPAN", "SPAN"], ["P", "P"], ["SECTION", "SECTION"], ["HEADER", "MAIN", "FOOTER"], ["ARTICLE"]]


// Initialize an empty array to hold results
// do this at least once:
  // Get a reference to the node that has the specified id
  // Initialize an empty array to hold  the element and it's siblings
  // Push the tagName of the current element into the siblings array
  // let previousSibling equal the element at the previousElementSibling property for the current node
  // While there are previous siblings:
    // Add the previous sibling to the siblings array
    // Reassign previous sibling to that sibling's previous sibling
  // let nextSibling equal the element at the nextElementSibling property for the current node
  // While there are next siblings:
    // Add the next sibling to the siblings array
    // Reassign the next sibling to that sibling's next sibling
  // Once all the siblings are gathered, add the siblings subarray to the results array
  // subtract 1 from the specified id
// keep doing the above while the specified id is greater than or equal to 1

function domTreeTracer(id) {
  let tree = [];

  do {
    let node = document.getElementById(id);
    let siblings = [node.tagName];

    let previousSibling = node.previousElementSibling;

    while(previousSibling) {
      siblings.push(previousSibling.tagName);
      previousSibling = previousSibling.previousElementSibling;
    }

    let nextSibling = node.nextElementSibling;

    while(nextSibling) {
      siblings.push(nextSibling.tagName);
      nextSibling = nextSibling.nextElementSibling;
    }

    tree.push(siblings);
    id -= 1;
  } while (id >= 1);

  return tree;
}