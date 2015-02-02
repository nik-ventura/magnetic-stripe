var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

// Nodemailer config
var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'nikolay.lebedev@gmail.com',
        pass: 'Enigma13416'
    }
});

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index');
});

router.post('/sendEmail', function(req, res) {
    var emailBody = req.body;
    var mailOptions = {
        from: emailBody.email,
        to: 'nikolay.lebedev@gmail.com',
        subject: 'Magnetic Stripe Feedback',
        html: 'From: '+ emailBody.name + '<br>' + '<a href="mailto:' + emailBody.email + '">' + emailBody.email + '</a>'  + '<br>' + emailBody.body
    };
    console.log(mailOptions);
    transporter.sendMail(mailOptions, function(error, info) {
        if(error) {
            console.log(error)
        }
        else {
            console.log('Message send' + info.response);
        }
    })

});



//router.get('/posts', function(req, res, next){
//    Post.find(function(err, posts){
//        if(err){next (err)}
//
//        res.json(posts)
//    });
//});
//
//router.post('/posts', function(req, res, next) {
//    var post = new Post(req.body);
//
//    post.save(function(err, post){
//        if(err){next(err)}
//
//        res.json(post)
//    })
//});
//
//
//router.param('post', function(req, res, next, id){
//    var query = Post.findById(id);
//
//    query.exec(function(err,post){
//        if(err){return next(err);}
//        if(!post){return next(new Error('can\'t find any post'))}
//
//        req.post = post;
//        return next();
//    });
//});
//
//router.get('/posts/:post', function(req, res){
//    req.post.populate('comments', function(err,post){
//        res.json(req.post);
//    });
//});
//
//router.put('posts/:post/upvote', function(req, res, next) {
//    req.post.upvote(function(err, post){
//        if(err){return next(err);}
//
//        res.json(post);
//    })
//});
//
//router.post('/posts/:post/comments', function(req, res, next){
//    var comment = new Comment(req.body);
//    comment.post = req.post;
//
//    req.post.comments.push(comment);
//    req.post.save(function(err,post){
//        if(err){ return next(err);}
//
//        res.json(post);
//    })
//});


module.exports = router;
