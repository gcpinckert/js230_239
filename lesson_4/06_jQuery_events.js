$(function() { // register event handlers inside the DOM ready event callback
  let $p = $('p');
  const OUTPUT = 'Your favorite fruit is: ';
  
  $('a').on('click', function(event) { // could also use 'click()' jQuery method
    event.preventDefault();
    let $anchor = $(this); // this -> element that fires the event (individual anchor)
    $p.text(OUTPUT + $anchor.text());
  });

  $('form').on('submit', function(event) { // could also use 'submit()' jQuery method
    event.preventDefault();
    let $input = $(this).find("input[type=text]"); // this -> element that fires the event (form)
    $p.text(OUTPUT + $input.val());
  });
});