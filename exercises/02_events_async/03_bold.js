function makeBold(element, callback) {
  if (typeof callback === 'function') {
    callback(element);
  }

  element.style.fontWeight = 'bold';
}