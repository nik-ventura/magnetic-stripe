// - services.js

// Factory for populating list of features
app.factory('FeaturesList', function(){
    var Features =  {
        feature:[
            {name:'Easy installation/removal'},
            {name:'Magnetic material can easily hold small metallic items'},
            {name:'Beautiful designs'},
            {name:'Strong enough to hold small manicure tools'},
            {name:'For more heavier items with include 2 tiny&strong magnets'}
        ]
    };
    return Features;
});

// Service for processing contact form
app.service('ProcessForm', ['$http', function( $http) {
    return {
        processForm : function(formData, cb){
           $http.post('/sendEmail', formData)
               .success(cb)
               .error(function(){
                   console.log('Sending email failed')
               })
        }
    }
}]);
