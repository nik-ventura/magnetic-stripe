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


// Service for sending email
app.service('sendEmail', ['$http', function($http) {
    return {
        sendingEmail : function(data) {
            console.log('dist reached');
            if (data.$valid) {
                console.log(data);
                $http.post('/sendEmail', data)
            } else {
                data.submitted = true;
            }
        }
    }
}])
