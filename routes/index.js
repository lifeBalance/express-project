// Routes
exports.index = function (req, res) {
  res.render('home', {
    title: 'Home',
    users: ['Snoop Lion', '2Pac', 'The Yogi bear'],
    className: 'home'
  });
}

exports.about = function (req, res) {
  res.render('about', {
    title: 'About Us',
    className: 'about'
  });
}
