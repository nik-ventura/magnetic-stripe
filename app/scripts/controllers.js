// - controllers.js
'use strict';

// Controller for getting list of customers
app.controller('HomeCtrl', ['$scope', '$timeout', 'CustomersFactory', function($scope, $timeout, CustomersFactory) {
    CustomersFactory.getCustomers(function(data) {
        $scope.customers = data;

        // Order table columns
        $scope.sort = "first_name";
        $scope.reverse = false;
        $scope.changeSort = function(value){
            if ($scope.sort == value){
                $scope.reverse = !$scope.reverse;
                return;
            }
            $scope.sort = value;
            $scope.reverse = false;
        };

        // Bootstrap UI pagination directive setup
        $scope.currentPage = 1; //current page
        $scope.maxSize = 5; //pagination max size
        $scope.entryLimit = 7; //max rows for data table

        // Init pagination with $scope.customers
        $scope.noOfPages = Math.ceil($scope.customers.length/$scope.entryLimit);
        $scope.setPage = function(pageNo) {
            $scope.currentPage = pageNo;
        };

        // Filter updating pagination based on filtered results
        $scope.filter = function() {
            $timeout(function() { // wait for 'filtered' to be changed
                // change pagination with $scope.filtered
                $scope.noOfPages = Math.ceil($scope.filtered.length/$scope.entryLimit);
            }, 10);
        };
    });
}]);
