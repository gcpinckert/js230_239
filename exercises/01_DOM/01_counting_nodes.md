# Counting Nodes

```html
<div>
  <p>Then press the <em>Draw</em> button</p>
</div>
```

The above code snippet will have 11 nodes:

1. HTML (missing tag supplied by browser)
2. HEAD (missing tag supplied by browser)
3. BODY (missing tag supplied by browser)
4. DIV (div HTML element)
5. "empty" Text node (whitespace between DIV and P)
6. P (p HTML element)
7. Text node containing "Then press the "
8. EM (em HTML element)
9. Text node containing "Draw"
10. Text node containing " button"
11. "empty" text node containing whitespace between ending p and div tags

```html
<div><p>Then press the <em>Draw</em> button</p></div>
```

The above code snippet will have 9 nodes:

1. HTML (missing tag supplied by browser)
2. HEAD (missing tag supplied by browser)
3. BODY (missing tag supplied by browser)
4. DIV (div HTML element)
5. P (p HTML element)
6. Text node containing "Then press the "
7. EM (em HTML element)
8. Text node containing "Draw"
9. Text node containing " button"
