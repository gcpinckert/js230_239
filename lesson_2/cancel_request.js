// create a reference to each HTML element
const loadBtn = document.querySelector('.loadBtn');
const abortBtn = document.querySelector('.abortBtn');
const image = document.querySelector('.image');
const result = document.querySelector('.result');

const controller = new AbortController();

// abort the request
abortBtn.addEventListener('click', () => controller.abort());

// load the image
loadBtn.addEventListener('click', async () => {
  loadBtn.disabled = true;
  abortBtn.disabled = false;

  result.textContent = 'Loading...';

  try {
    const response = await fetch('https://upload.wikimedia.org/wikipedia/commons/a/a3/Kayakistas_en_Glaciar_Grey.jpg', {signal: controller.signal});
    const blob = await response.blob();
    image.src = URL.createObjectURL(blob);

    // remove the 'Loading... text
    result.textContent = '';
  } catch (err) {
    if (err.name === 'AbortError') {
      result.textContent = 'Request successfully canceled';
    } else {
      result.textContent = 'An error occurred!';
      console.error(err);
    }
  }

  loadBtn.disabled = false;
  abortBtn.disabled = true;
});