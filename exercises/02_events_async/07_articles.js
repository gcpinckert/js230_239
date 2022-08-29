function getTargetArticle(linkNode) {
  let id = linkNode.href.match(/#article-[0-9]+/)[0];
  return document.querySelector(id);
}

function removeHighlight() {
  let highlighted = document.querySelector('.highlight');
  if (highlighted === null) return;
  highlighted.classList.remove('highlight');
}

function addHighlight(node) {
  removeHighlight();
  node.classList.add('highlight');
}

document.addEventListener('DOMContentLoaded', () => {
  let navLinks = document.querySelector('ul');

  navLinks.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
      removeHighlight();
      let targetArticle = getTargetArticle(event.target);
      targetArticle.classList.add('highlight');
    }
  });

  let main = document.querySelector('main');
  main.addEventListener('click', (event) => {
    event.stopImmediatePropagation();
    if (event.target.tagName !== 'ARTICLE') {
      addHighlight(event.target.parentNode);
    } else {
      addHighlight(event.target);
    }
  });
});