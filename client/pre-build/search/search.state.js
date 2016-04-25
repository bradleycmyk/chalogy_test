'use strict';
app.config(function($stateProvider) {

  $stateProvider.state('search', {
    url: '/search',
    controller: 'searchController',
    templateUrl: '/pre-build/search/search.html'
  });
});
