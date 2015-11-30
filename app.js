var express = require('express');
var exphbs  = require('express-handlebars');
var routes  = require('./routes');

// Namespacing our application. We access all the methods
// that express gives us through this `app` variable
var app = express();

// Handlebars templates
app.engine('.hbs', exphbs({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', '.hbs');

// Locals
app.locals.siteTitle = "Awesome Express";
app.locals.copyright = new Date().getFullYear();

// Routing
app.get('/', routes.index);
app.get('/about', routes.about);
app.get('*', function (req, res) {
  res.send("<h1>Bad route!</h1>")
});

// Server
app.server = app.listen(3000, function () {
  console.log('Listening on http://localhost:3000')
  console.log('Press Ctrl-C to stop the server.')
})
