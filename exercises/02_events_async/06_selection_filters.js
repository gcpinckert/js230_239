document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#selection-filters');
  const classificationsDropdown = document.querySelector('#animal-classifications');
  const animalsDropdown = document.querySelector('#animals');
  const [classifications, vertebrate, warmBlooded, coldBlooded, mammal, bird] = classificationsDropdown.options;
  const [animals, bear, turtle, whale, salmon, ostrich] = animalsDropdown.options;
  const categoryFilterOptions = {
    classifications: {
      Vertebrate: [animals,bear, turtle, whale, salmon, ostrich],
      'Warm-blooded': [animals,bear, whale, ostrich],
      'Cold-blooded': [animals,salmon, turtle],
      Mammal: [animals,bear, whale],
      Bird: [animals,ostrich],
      all: [classifications, vertebrate, warmBlooded, coldBlooded, mammal, bird],
    },
    animals: {
      Bear: [classifications, vertebrate, warmBlooded, mammal],
      Turtle: [classifications, vertebrate, coldBlooded],
      Whale: [classifications, vertebrate, warmBlooded, mammal],
      Salmon: [classifications, vertebrate, coldBlooded],
      Ostrich: [classifications, vertebrate, warmBlooded, bird],
      all: [animals, bear, turtle, whale, salmon, ostrich],
    },
  };

  form.addEventListener('click', (event) => {
    event.preventDefault();
    if (event.target.parentNode.id === 'animal-classifications') {
      animalsDropdown.options.length = 0;
      categoryFilterOptions.classifications[event.target.value].forEach(node => {
        animalsDropdown.add(node);
      });
    } else if (event.target.parentNode.id === 'animals') {
      classificationsDropdown.options.length = 0;
      categoryFilterOptions.animals[event.target.value].forEach(node => {
        classificationsDropdown.add(node);
      });
    } else if (event.target.id === 'clear') {
      classificationsDropdown.options.length = 0;
      categoryFilterOptions.classifications.all.forEach(node => {
        classificationsDropdown.add(node);
      });
      animalsDropdown.options.length = 0;
      categoryFilterOptions.animals.all.forEach(node => {
        animalsDropdown.add(node);
      });
    }
  });
})