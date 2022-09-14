let products = [{
  name: 'Banana',
  quantity: 14,
  price: 0.79
}, {
  name: 'Apple',
  quantity: 3,
  price: 0.55
}];

$(function() {
  // Compile both templates for use later
  let productsList = Handlebars.compile($('#productsList').html());
  let productTemplate = Handlebars.compile($('#productTemplate').html());
  let $list = $('ul');

  // Also register the product template as a partial
  Handlebars.registerPartial('productTemplate', $('#productTemplate').html());

  // Write the current list to the page
  $list.html(productsList({ items: products }));

  // Create a new product
  let newProduct = {
    name: 'Soup',
    quantity: 1,
    price: 1.29,
  };

  // Render the new product with the product template
  $list.append(productTemplate(newProduct));
});


