var express = require('express');

// Namespacing our application. We access all the methods
// that express gives us through this `app` variable
var app = express();

// Routing
app.get('/', function (req, res) {
  res.send('<h1>Hello Express</h1>')
});

// Server
app.server = app.listen(3000, function () {
  console.log('Listening on http://localhost:3000')
  console.log('Press Ctrl-C to stop the server.')
})
