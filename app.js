var express = require('express');
var exphbs  = require('express-handlebars');

// Namespacing our application. We access all the methods
// that express gives us through this `app` variable
var app = express();

// Handlebars templates
app.engine('.hbs', exphbs({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', '.hbs');

// Routing
app.get('/', function (req, res) {
  // res.send('<h1>Hello Express</h1>')
  res.render('home', {
    title: 'Home',
    users: ['Snoop Lion', '2Pac', 'The Yogi bear']
  });
});

app.get('/me', function (req, res) {
  res.send("<h1>Hey, it's me</h1>")
});

app.get('/who/:name?', function (req, res) {
  var name = req.params.name;
  res.send("<h1>Hey, it's " + name + "</h1>")
});

app.get('/who/:name?/:nick?', function (req, res) {
  var name = req.params.name;
  var nick = req.params.nick;
  res.send("<h1>Hey, it's " + name + " the " + nick +"</h1>")
});

app.get('*', function (req, res) {
  res.send("<h1>Bad route!</h1>")
});

// Server
app.server = app.listen(3000, function () {
  console.log('Listening on http://localhost:3000')
  console.log('Press Ctrl-C to stop the server.')
})
