// - server.js

var express = require("express");
var nodemailer = require("nodemailer");

var smtpTransport = nodemailer.createTransport('SMTP', {
   service: "Gmail",
   auth: {
        user:"nikolay.lebedev@gmail.com",
        password: "password"
    }
});

var app = express();
app.listen(3000, function(){
    console.log('Express started on port 3000')
});

app.get('/', function(req, res){
    res.sendfile('dist/index.html')
});
app.get('/sendEmail', function(req, res){

    smtpTransport.sendMail({
            from: "nikolay.lebedev@gmail.com",
            to:"fromData.email",
            text:"formData.body"
        },
        function(error, response){
            if(error) {
                console.log(error)
            }
            else {
                console.log('Message sent' + response.message);
            }
        }
    );

});