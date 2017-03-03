// port default 8080;
var port = 8080;

// core modules for app;
var express = require('express');
var bodyParser = require('body-parser');
var rl = require('readline');

// creating & setting app
var app = express();
app.set('view engine', 'ejs');
var logger = function(request,response,next){
    console.log('Request : '+request.url + ' , Method : '
    + request.method + ' Logging . ' );
    next();
};
app.use('/data',express.static('data'));
app.use(logger);

// setting up parser
var parser = bodyParser.urlencoded({extended:false});

// setting up database
var database = [{item:'buy some flowers'}];

// getting data from the server
app.get('/',function(request,response){
    response.render('index',{data:database});
});

// posting data to the server
app.post('/',parser,function(request,response){
    database.push(request.body);
    response.json(database);
});

// deleting data from the server
app.delete('/:item', function(request,response){
    database.splice(request.body);
    response.json(database);
});

// listening to the server
app.listen(port, function() {
    console.log('App listening on port : %s',port);
});