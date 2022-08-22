// nodeSwap function
// input: two element ids
// swaps the position of the elements represented by the ids
// returns true if swap is valid and is able to be performed
// returns undefined if swap is invalid and cannot be performed
// assume nodes will have a value for the id attribute
// assume two arguments are always provided
// invalid swaps include:
// - one of the id attributes does not exist
// - one of the nodes is a "child" of the other

// get the element nodes that correspond to the given id
// if either is null, return false
// if either is a child of the other, return false
// get the parent node of each
// clone each node
// replace node1 with the clone of node2
// replace node2 with the clone of node1

function nodeSwap(node1Id, node2Id) {
  let node1 = document.getElementById(node1Id);
  let node2 = document.getElementById(node2Id);

  if (node1 === null || node2 === null) return;
  if (Array.prototype.includes.call(node1.children, node2) || Array.prototype.includes.call(node2.children, node1)) return;

  let parentNode1 = node1.parentElement;
  let parentNode2 = node2.parentElement;

  let cloneNode1 = node1.cloneNode(true);
  let cloneNode2 = node2.cloneNode(true);

  parentNode1.replaceChild(cloneNode2, node1);
  parentNode2.replaceChild(cloneNode1, node2);

  return true;
}
