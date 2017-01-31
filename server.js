const express = require('express');

const app = express();
const port = process.env.PORT || 3001;

app.use(function (request, response, next){
  if (request.headers['x-forwarded-proto'] === 'https') {
    response.redirect('http://' + request.hostname + request.url);
  } else {
    next();
  }
});

app.use(express.static('public'));

app.listen(port, function() {
  console.log('Express server running on port ' + port);
});