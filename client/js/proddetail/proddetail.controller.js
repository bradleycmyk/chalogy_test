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
	 //    var shopClient = ShopifyBuy.buildClient({
		// 	apiKey: 'f7558dd14f7c9c3289b1bd175989fd5f',
		// 	domain: 'www.designplusshop.com/',
		// 	appId: '6'
		// });
	
	 //    // Little D + Tiny Emoji Stickers, Volume 2
	 //    shopClient.fetchProduct(1933592772)
		//   .then(function (product) {
		//     console.log(product);
		//   })
		//   .catch(function () {
		//     console.log('Request failed');
		//   });

		// var cart;
		// shopClient.createCart().then(function (newCart) {
		//   cart = newCart;
		//   console.log("cart: ",cart);
		//   // do something with updated cart
		// });

	$scope.attachOnVariantSelectListeners = function() {
		
	}

	$(document).ready(function(){

		setTimeout(function() {
	      $('#white-wrap-d').removeClass('white-wrap')
	    }, 250);

		$(function() { 

	  	var shopClient = ShopifyBuy.buildClient({
		  apiKey: 'd5571acc165495201f358c5e44e4d912',
		  domain: 'chalogy.myshopify.com/',
		  appId: '6'
		});

	  	// fetch products
	  	var imgsrc;
		shopClient.fetchProduct(7013809921)
		  .then(function (product) {
		    console.log(product);
		    imgsrc = product.images[0].src; 
		    var variant = product.variants[0];
			var checkoutURL;
			checkoutURL = variant.checkoutUrl(1);

			console.log("checkouturl: ", product.selectedVariant.checkoutUrl(1));
		    
		    var buttonhtml = "<a class='product__buy' href='" + product.selectedVariant.checkoutUrl(1) + "'>Buy Now!</a>";
		    var buttonhtml2 = "<a href='" + product.variants[0].checkoutUrl(1) + "'>Buy Now!</a>";

		    // document.getElementById("imagetest").innerHTML = imgsrc;
		    // $( "#imagetest" ).html( imgsrc );
		    $( "#imagetest" ).attr("src", imgsrc);
		    $("#buttontest").html(buttonhtml);
		    $("#buttontest2").html(buttonhtml2);


		    // $scope.productImage = imgsrc;
		    // $scope.digest();
		  })
		  .catch(function () {
		    console.log('Request failed');
		  });

		var cart;
		shopClient.createCart().then(function (newCart) {
		  cart = newCart;
		  // do something with updated cart
		});

	})

	})

});
