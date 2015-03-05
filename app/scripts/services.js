// - services.js
'use strict';

// Factory for populating list of customers
app.factory('CustomersFactory', ['$http', function($http){
  return {
      getCustomers: function(data){
         $http.get('views/customers.json')
             .success(data)
             .error(function(){
                 console.log('Something wrong with JSON')
             })
      }
  }
}]);

// Filter customers
app.filter('SearchCustomer', function() {
    return function(input, start) {
        if(input) {
            start = +start; //parse to int
            return input.slice(start);
        }
        return [];
    }
});


