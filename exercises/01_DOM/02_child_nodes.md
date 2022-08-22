# Child Nodes

```html
<div id ="1">
  <h1 id="2">Hello, <em id="3"> World</em></h1>
  <p id="4">
    Welcome to wonderland. This an
    <span id="5">awesome</span> place.
  </p>
  <a href="#" id="6"><strong id="7">Enter</strong></a>
  <div id="8"><p id="9"><a href="#" id="10">Go Back</a></p></div>
</div>
```

How many direct and indirect child nodes does each parent node have in the DOM?

Starting with a parent node id of 1:

1. (DIV) - 9 direct children, 12 indirect children
2. (H1) - 2 direct children, 1 indirect child
3. (EM) - 1 direct child
4. (P) - 3 direct children, 1 indirect child
5. (SPAN) - 1 direct child
6. (A) - 1 direct child, 1 indirect child
7. (STRONG) - 1 direct child
8. (DIV) - 1 direct child, 2 indirect children
9. (P) - 1 direct child, 1 indirect child
10. (A) - 1 direct child
