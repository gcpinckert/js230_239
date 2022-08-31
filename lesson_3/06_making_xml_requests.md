# Making XMLHttpRequests Practice Problems

## 1

```javascript
let request = new XMLHttpRequest();
request.open('GET', 'https://api.github.com/repos/rails/rails');
request.send();
```

## 2

We can use the `request.responseText` property to access the response body of the request once the HTTP Response is received.