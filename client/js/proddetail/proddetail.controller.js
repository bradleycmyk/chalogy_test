app.controller('ProdDetailCtrl', function($scope, $http, $state, $stateParams, ProductFactory, $window) {

    var name = $stateParams.name;
	$scope.name = $stateParams.name;

	ProductFactory.getOneItem($stateParams.name).then(function(data){
		$scope.product = data;
	});

	// for tab manipulation
	$scope.tab;
	$scope.selectTab = function(setTab){
		$scope.tab = setTab;
	};

	// shopify info 
	    var shopClient = ShopifyBuy.buildClient({
			apiKey: 'f7558dd14f7c9c3289b1bd175989fd5f',
			domain: 'www.designplusshop.com/',
			appId: '6'
		});
	
	    // Little D + Tiny Emoji Stickers, Volume 2
	    shopClient.fetchProduct(1933592772)
		  .then(function (product) {
		    console.log(product);
		  })
		  .catch(function () {
		    console.log('Request failed');
		  });

		var cart;
		shopClient.createCart().then(function (newCart) {
		  cart = newCart;
		  console.log("cart: ",cart);
		  // do something with updated cart
		});
	
	$(document).ready(function(){

		setTimeout(function() {
	      $('#white-wrap-d').removeClass('white-wrap')
	    }, 250);



	})

});
