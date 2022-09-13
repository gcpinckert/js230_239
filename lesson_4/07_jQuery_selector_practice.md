# Using jQuery Selectors Practice Problems

Using [this page](https://d3jtzah944tvom.cloudfront.net/jquery_selectors/index.html)

1. `$('h1');`
2. `$('#site_title');`
3. `$('article.blog_article_block').find('li');` -> `length` of 7
4. `$('article ul').children().eq(2)` or `$('article li').eq(2)`
5. `$('tbody').children().filter(index => { return index % 2 === 1 })` or `$('table').find('tr').filter(':odd');`
6. `$("li li:contains('ac ante')").parents('li').addClass('highlight');`
7. `$("li li:contains('ac ante')").next()`
8. `$('td').last()` or `$('td').eq(-1)`
9. `$('td').not('.protected')` or `$('td:not(".protected")');`
10. `$('a[href^="#"]')`
11. `$('[class*="block"]')`
