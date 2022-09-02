let request = new XMLHttpRequest();
request.open('GET', 'hts://api.github.com/repos/rails/rails');
request.responseType = 'json';

let data;

request.addEventListener('load', event => {
  data = request.response;
  console.log(data['open_issues_count']);
  console.log(request.status);
});

request.addEventListener('error', event => {
  console.log('The request could not be completed!');
});

request.send();
