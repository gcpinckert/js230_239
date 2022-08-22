// sliceTree function -> acts like Array.prototype.slice for a DOM tree
  // input: start index, end index
  // - start index is parent node's id attribute
  // - end index is the innermost child node's id attribute
  // output: array of tagnames

// Rules
// - the second argument is inclusive (unlike slice)
// - the end index is not necessarily the id of the "innermost" child (?)
// - only consider element nodes (disregard text nodes)
// - Only elements that have body as ancestor are sliceable (disregard head, html, etc)
// - If the id attribute is not in the DOM, return undefined
// - If the slice is not feasible, i.e. there's no path connecting the element at starting id to element at ending id, return `undefined`

// Examples:
sliceTree(1, 4);    // ["ARTICLE", "HEADER", "SPAN", "A"]
sliceTree(1, 76);   // undefined
sliceTree(2, 5);    // undefined
sliceTree(5, 4);    // undefined
sliceTree(1, 23);   // ["ARTICLE", "FOOTER"]
sliceTree(1, 22);   // ["ARTICLE", "MAIN", "SECTION", "P", "SPAN", "STRONG", "A"]
sliceTree(11, 19);  // ["SECTION", "P", "SPAN", "STRONG", "A"]

// get the nodes associated with start and end ids
// if either id argument returns null, return undefined
// initialize an empty array to hold results
// start with the end node since an element will always have a single parentNode
// - add the tagName of the end node to the results array
// - get the parentNode of the end node
// - is the parentNode the start node?
//   - if yes, add the tagName and return the results array (slice over)
// - is the parentNode the body element?
//   - if yes, return undefined (combination not possible)
// - otherwise
//   - reassign the end node to the parent node, and iterate again

function sliceTree(startId, endId) {
  let startNode = document.getElementById(startId);
  let endNode = document.getElementById(endId);

  if (!(startNode || endNode)) return undefined;

  let slice = [];

  while(endNode) {
    slice.unshift(endNode.tagName);
    let parentNode = endNode.parentElement;
    if (parentNode.id === String(startId)) {
      slice.unshift(parentNode.tagName);
      return slice;
    } else if (parentNode === document.body) {
      return undefined;
    } else {
      endNode = parentNode;
    }
  }
}