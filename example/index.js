var path = require('path')
  , express = require('express')
  , app = express()
  , Faker = require('Faker')

var users = []

for(i = 100; i >= 0; i--){
  users.push(Faker.Helpers.userCard());
}

function matcher(item, query) {
  return ~item.toLowerCase().indexOf(query.toLowerCase())
}

function sorter(items, query) {
  var beginswith = []
    , caseSensitive = []
    , caseInsensitive = []
    , item

  while (item = items.shift()) {
    if (!item.name.toLowerCase().indexOf(query.toLowerCase())) beginswith.push(item)
    else if (~item.name.indexOf(query)) caseSensitive.push(item)
    else caseInsensitive.push(item)
  }

  return beginswith.concat(caseSensitive, caseInsensitive)
}

app.get('/backbone-search.js', function(req, res) {
  res.sendfile(path.join(__dirname, '../', 'backbone-search.js'))
})

app.get('/', function(req, res) {
  res.redirect('/search')
})

app.get('/search', function(req, res) {
  if (!req.query.q) return res.sendfile(__dirname + '/search.html')

  var _users = users.filter(function(user) {
    return matcher(user.name, req.query.q)
  })

  _users = sorter(_users, req.query.q)

  res.json(_users)
})

app.listen(3000)
console.log('Listening on port 3000')