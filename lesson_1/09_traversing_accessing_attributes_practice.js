function walk(node, callback) {
  callback(node);

  for (let i = 0; i < node.childNodes.length; i += 1) {
    walk(node.childNodes[i], callback);
  }
}

// 1.
let html = document.lastChild;
let body = html.lastChild;
let heading = body.childNodes[1];

heading.style.color = 'red';
heading.style.fontSize = '48px';

// 2.
let paragraphs = 0

walk(document, node => {
  if (node instanceof HTMLParagraphElement) {
    paragraphs += 1
  }
});

console.log(`There are ${paragraphs} paragraphs`);

// 3.
let firstWords = [];

walk(document, node => {
  if (node instanceof HTMLParagraphElement) {
    let cleanedText = node.textContent.trim();
    let firstWord = cleanedText.split(' ')[0];
    firstWords.push(firstWord);
  }
});

console.log(firstWords);

// 4.
let pNodes = document.querySelectorAll('p');

for (let i = 1; i < pNodes.length; i += 1) {
  pNodes[i].classList.add('stanza');
}