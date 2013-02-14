!function(Backbone) {

  "use strict";

  var BackboneSearch = Backbone.Collection.extend({
    initialize: function() {
      this._throttledFetch = _.throttle(this.fetch, 300);
    },
    query: function(query) {
      this._throttledFetch({url: this.url+query});
    }
  });

  window.BackboneSearch = function(options) {
    if (!options || !options.url) throw new Error('BackboneSearch requires a URL to be defined')

    var backboneSearch = new BackboneSearch();

    backboneSearch.url = options.url;

    return backboneSearch;
  };

}(window.Backbone);
