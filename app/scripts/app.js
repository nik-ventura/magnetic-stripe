// - app.js
'use strict';

var app = angular.module('betsson-test', [
    'ui.router',
    'ui.bootstrap'
]);

app.config(['$stateProvider', '$urlRouterProvider',  function($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('home', {
			url:'/home',
			templateUrl: 'views/home.html',
            controller: 'HomeCtrl'
		})
	$urlRouterProvider.otherwise('home');
}]);


