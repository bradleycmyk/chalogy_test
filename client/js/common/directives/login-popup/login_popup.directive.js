app.directive("login", function(){
	return {
		restrict: "E",
		templateUrl: "/js/common/directives/login-popup/login_popup.html",
		controller: "LoginPopupController"
	};
});
