
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var azure = require('azure-storage');


var blobSvc = azure.createBlobService();
blobSvc.createContainerIfNotExists('testblobcontainerstorage', function(error, result, response){
  if(!error){
    // Container exists and allows
    // anonymous read access to blob
    // content and metadata within this container
    console.log('Container created successfully or already exists');
  }
});

blobSvc.createBlockBlobFromLocalFile('testblobcontainerstorage', 'newblob', 'C:\Users\alexg_000\Pictures\_MG_5834.jpg', function(error, result, response){
  if(!error){
    console.log('File Created Successfully');
  }
  else{
      console.log('Error on file upload')
  }
});
/*
var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
*/
