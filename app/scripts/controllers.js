
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
