var app = angular.module('magnetic-stripe', [
    'ngAnimate',
    'ui.router',
	'ngSanitize'
]);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('home', {
			url:'/home',
			templateUrl: 'views/home.html'

		})
		.state('designs', {
			url:'/designs',
			templateUrl: 'views/designs.html'
		})
		.state('contact', {
			url: '/contact',
			templateUrl:'views/contacts.html'
		})
        .state('/buy', {
            url:'/buy',
            templateUrl: 'views/buy.html'
    })
	$urlRouterProvider.otherwise('home')	
}]);

