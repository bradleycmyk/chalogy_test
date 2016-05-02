'use strict';
app.config(function($stateProvider) {

  $stateProvider.state('search', {
    url: '/search/:text',
    controller: 'searchController',
    templateUrl: '/js/search/search.html'
  });
});


