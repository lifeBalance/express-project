var express = require('express');
var exphbs  = require('express-handlebars');

// Namespacing our application. We access all the methods
// that express gives us through this `app` variable
var app = express();

// Handlebars templates
app.engine('.hbs', exphbs({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', '.hbs');

// Locals
app.locals.pageTitle = "Hi, I'm a locals, available in all views";

// Routing
app.get('/', function (req, res) {
  res.render('home', {
    title: 'Home',
    users: ['Snoop Lion', '2Pac', 'The Yogi bear'],
    className: 'home'
  });
});

app.get('/about', function (req, res) {
  res.render('about', {
    title: 'About Us',
    className: 'about'
  });
});

app.get('*', function (req, res) {
  res.send("<h1>Bad route!</h1>")
});

// Server
app.server = app.listen(3000, function () {
  console.log('Listening on http://localhost:3000')
  console.log('Press Ctrl-C to stop the server.')
})
