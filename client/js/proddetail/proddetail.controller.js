app.controller('ProdDetailCtrl', function($scope, $http, $state, $stateParams, ProductFactory, $window) {

    var name = $stateParams.name;
	$scope.name = $stateParams.name;

  ProductFactory.getOneItem($stateParams.name).then(function(data){
    $scope.product = data;
    // console.log($scope.product.checkouturl);
  })

	// for tab manipulation
	$scope.tab;
	$scope.selectTab = function(setTab){
		$scope.tab = setTab;
	};

	$(document).ready(function(){

		setTimeout(function() {
	      $('#white-wrap-d').removeClass('white-wrap')
	    }, 250);

		// $(function() {
    //
	  // 	var shopClient = ShopifyBuy.buildClient({
  	// 	  apiKey: 'f7558dd14f7c9c3289b1bd175989fd5f',
  	// 	  domain: 'www.designplusshop.com/',
  	// 	  appId: '6'
  	// 	});
    //
	  // 	// fetch products
	  // 	var imgsrc;
  	// 	shopClient.fetchProduct(1552109444)
  	// 	  .then(function (product) {
  	// 	    console.log(product);
  	// 	    imgsrc = product.images[0].src;
  	// 	    var variant = product.variants[0];
    // 			var checkoutURL;
    // 			checkoutURL = variant.checkoutUrl(1);
    //
    // 			console.log("checkouturl: ", product.selectedVariant.checkoutUrl(1));
    //
  	// 	    var buttonhtml = "<a class='product__buy' href='" + product.selectedVariant.checkoutUrl(1) + "'>Buy Now!</a>";
  	// 	    var buttonhtml2 = "<a href='" + product.variants[0].checkoutUrl(1) + "'>Buy Now!</a>";
    //
  	// 	    // document.getElementById("imagetest").innerHTML = imgsrc;
  	// 	    // $( "#imagetest" ).html( imgsrc );
  	// 	    $( "#imagetest" ).attr("src", imgsrc);
  	// 	    $("#buttontest").html(buttonhtml);
  	// 	    $("#buttontest2").html(buttonhtml2);
    //
  	// 	    // $scope.productImage = imgsrc;
  	// 	    // $scope.digest();
  	// 	  })
		//   .catch(function () {
		//     console.log('Request failed');
		//   });
  	// })
	})
});
