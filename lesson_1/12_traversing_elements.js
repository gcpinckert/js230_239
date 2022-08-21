// Retrieve a word count for each h2 heading on the page

let h2Headings = document.querySelectorAll('h2');
h2Headings = Array.prototype.slice.call(h2Headings);

let wordCounts = h2Headings.map(h2Node => {
  return h2Node.textContent.split(' ').length;
});

console.log(wordCounts);

// Use three different DOM methods to retrieve a reference to the table of contents parent div

console.log(document.querySelector('#toc, .toc'));
console.log(document.getElementById('toc'));
console.log(document.getElementsByClassName('toc')[0]);

// Change the color for each odd indexed link in the table of contents to green

let tableOfContents = document.querySelector('#toc');
let contentsLinks = Array.prototype.slice.call(tableOfContents.querySelectorAll('a'));

contentsLinks.forEach((link, i) => {
  if (i % 2 === 1) {
    link.style.color = 'green';
  }
});

// Retrieve the text of each thumbnail caption
let thumbnailCaptions = document.querySelectorAll('.thumbcaption');
let allThumbnailText = '';

for (let i = 0; i < thumbnailCaptions.length; i += 1) {
  allThumbnailText += ` ${thumbnailCaptions[i].textContent.trim()}`;
}

console.log(allThumbnailText);

// extract the taxonomic ranks of the polar bear as an object where ranks are keys and scientific classification names are the values

const TAXONOMIC_RANKS = ['Kingdom', 'Phylum', 'Class', 'Order', 'Family', 'Genus', 'Species'];

let table = document.querySelector('table, .infobox biota');
let rows = Array.prototype.slice.call(table.querySelectorAll('tr'));

let classification = {};

TAXONOMIC_RANKS.forEach(rank => {
  let row = rows.find(row => row.textContent.split(/\s/).includes(rank + ':'));
  classification[rank] = row.lastElementChild.textContent;
});

console.log(classification);