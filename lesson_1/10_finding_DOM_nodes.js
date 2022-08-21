// 1.
function getAllPElements() {
  return document.querySelectorAll('p');
}

// 2.
function addClassToPs() {
  let allPs = getAllPElements();

  for (let i = 0; i < allPs.length; i += 1) {
    allPs[i].classList.add('article-text');
  }
}

// 3. rework things to be more general


function getElementsByTagName(tag) {
  return document.getElementsByTagName(tag);
}

function addCSSClassToAllElementsOfType(tagType, className) {
  let elements = getElementsByTagName(tagType);

  for (let i = 0; i < elements.length; i += 1) {
    elements[i].classList.add(className);
  }
}

// Group 2

// 2. Add the 'article-text' class to p elements that are inside a <div class='intro'> tag.

let introDivs = document.getElementsByClassName('intro'); // get all elements of 'intro' class
introDivs = Array.prototype.slice.call(introDivs); // make into array we can operate on it
introDivs = introDivs.filter(node => node instanceof HTMLDivElement); // make sure all nodes are divs

introDivs.forEach(div => {
  let paragraphs = Array.prototype.slice.call(div.getElementsByTagName('p'));
  paragraphs.forEach(paragraph => paragraph.classList.add('article-text'));
});

// Re-written with selector search methods:
// previous approach
let intros = document.getElementsByClassName("intro");
for (let index = 0; index < intros.length; index += 1) {
  let paragraphs = intros[index].getElementsByTagName("p");

  for (let p = 0; p < paragraphs.length; p += 1) {
    paragraphs[p].classList.add("article-text");
  }
}

// using querySelectorAll
let paragraphs = document.querySelectorAll(".intro p");
for (let index = 0; index < paragraphs.length; index += 1) {
  paragraphs[index].classList.add("article-text");
}