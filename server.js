const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT||3000;

var app = express();


hbs.registerPartials(__dirname+'/views/partials');
app.set('view engine','hbs');
app.use(express.static(__dirname+'/public'));



app.use(function(req,res,next) {
   var now = new Date().toString();
    console.log(now);
    console.log(req.method);
    console.log(req.url);
    
    next(); 
});

/*
app.use(function(re,res,next) {
    res.render('maintenance.hbs');
})
*/

app.get('/',function(req,res) {
    //res.send('<h1>Hello express</h1>');
    /*res.send( {
        name:'Abhi',
        likes:[
            'Games',
            'Youtube'
        ]
    });*/
    res.render('home.hbs', {
        name:'Abhi',
        currentYear:new Date().getFullYear(),
        message:'Hello. Hi'
    });
});


app.get('/project',function(req,res) {
    res.render('project.hbs', {
         name:'Abhi',
        currentYear:new Date().getFullYear(),
        message:'Hello. Welcome to projects page'
    })
});

app.get('/about',function(req,res) {
    res.render('about.hbs', {
        pageTitle:'About Page',
        currentYear: new Date().getFullYear()
    });
});

app.get('/bad',function(req,res) {
    res.send({
        errorMessage:'Unable to handle request' 
    });
})

app.listen(port, function() {
    console.log('Server Started at',port);
});