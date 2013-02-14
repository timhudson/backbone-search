# backbone search collection

A backbone collection for handling search results

# usage

``` js
  // Initialize the search collection
  var search = new BackboneSearch({url: '/search?q='});

  $('input').on('keyup', function() {
    var query = $(this).val();

    // Pass query to the search collection
    search.query(query);
  });

  // Listen for the reset event
  search.on('reset', function(collection) {
    // Do something with the fresh search results
  });
```

# example

Install development dependencies
``` bash
$ npm install
```

Start server
``` bash
$ node example
```

Visit http://localhost:3000 in your browser

# license

MIT
