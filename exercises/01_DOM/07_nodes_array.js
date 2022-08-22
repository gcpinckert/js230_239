// convert the DOM (starting from body) to nested arrays.
// each element in the dom is represented like:
  // ["PARENT_TAG_NAME", [children]]
  // if an element has no children -> ["PARENT_TAG_NAME", []]

// starting with document.body...
// Does the element have element children?
// set the array value to [element.tagName, []]
// - if so, iterate over each child element
//   - set childArr to the return value of a recursive function call with the current child
//   - push the childArr into the array[0]
// - if not, return

function getChildElements(node) {
  let subArr = [node.tagName, []];

  for (let i = 0; i < node.children.length; i += 1) {
    let child = node.children[i];
    if (child.childElementCount > 0) {
      subArr[1].push([child.tagName, getChildElements(child)]);
    } else {
      subArr[1].push([child.tagName, []]);
    }
  }

  return subArr;
}

function nodesToArr() {
  let arr = [document.body.tagName, []];
  if (document.body.childElementCount > 0) {
    arr = [document.body.tagName, Array.prototype.slice.call(document.body.children).map(node => {
      return getChildElements(node);
    })]
  }

  return arr;
}