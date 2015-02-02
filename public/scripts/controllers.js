// - controllers.js

// Controller for toggling active state on navigation menu
app.controller('MenuCtrl', ['$scope', '$location', function($scope, $location) {
    $scope.getClass = function(path) {
        if ($location.path().substr(0, path.length) === path) {
            return "active"
        } else  {
            return ""
        }
    }
}]);

// Controller for populating list of features from FeaturesList factory
app.controller('FeaturesCtrl', ['$scope', 'FeaturesList', function($scope, FeaturesList) {
    $scope.features = FeaturesList.feature;
}]);

// Controller for contact form
//app.controller('ContactCtrl',  ['$scope', '$http', function($scope, $http){
//    $scope.formData = {};
//    $scope.submitted = false;
//    $scope.submitForm = function() {
//        if ($scope.emailForm.$valid) {
//            console.log($scope.formData);
//            $http.post('/sendEmail', $scope.formData)
//        } else {
//            $scope.emailForm.submitted = true;
//        }
//    };
//}]);

app.controller('ContactCtrl',  ['$scope', 'sendEmail', function($scope, sendEmail){
    $scope.formData = {};
    $scope.submitted = false;
//    $scope.submitForm = sendEmail.sendingEmail($scope.formData)
}]);

