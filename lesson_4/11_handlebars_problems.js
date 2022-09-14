let post = {
  title: 'Lorem ipsum dolor sit amet',
  published: 'April 1, 2015',
  body: '<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>',
};

post.tags = ['cicero', 'latin', 'placeholder', 'rome'];

let secondPost = {
  title: 'Another post',
  published: 'April 4, 2020',
  body: '<p>This one is not in Latin. It is in English.',
};

let posts = [post, secondPost];

$(function() {
  let articleTemplate = Handlebars.compile($('#post').html());
  let $body = $('body');

  Handlebars.registerPartial('tag', $('#tag').html());

  $body.html(articleTemplate({ posts }));
});