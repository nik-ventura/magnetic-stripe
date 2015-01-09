var app = angular.module('magneticStripe', [
	'ui.router',
	'ngSanitize'
])

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('home', {
			url:'/home',
			templateUrl: '/views/home.html',
			controller: ''

		})
		.state('designs', {
			url:'/designs',
			templateUrl: '/views/designs.html',
			controller: ''
		})
		.state('contact', {
			url: '/contact',
			templateUrl:'/views/contacts.html',
			controller:''
		})
	$urlRouterProvider.otherwise('home')	
}])