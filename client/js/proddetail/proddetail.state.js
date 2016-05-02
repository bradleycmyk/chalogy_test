'use strict';

app.config(function($stateProvider) {
  $stateProvider.state('prodDetail', {
    url: '/saturday-skin/products/:name',
    controller: 'ProdDetailCtrl',
    templateUrl: '/js/proddetail/proddetail.html'
  });
});

