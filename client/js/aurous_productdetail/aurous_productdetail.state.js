'use strict';

app.config(function($stateProvider) {
  $stateProvider.state('AurousProdDetail', {
    url: '/aurous/products/:name',
    controller: 'AurousProdDetailCtrl',
    templateUrl: '/js/aurous_productdetail/aurous_productdetail.html'
  });
});

