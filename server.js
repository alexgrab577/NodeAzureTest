
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var input = require('./routes/input');
var http = require('http');
var path = require('path');

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
//app.use(express.static('public'));



app.use(require('stylus').middleware(path.join(__dirname, 'public')));
//app.use(express.static(path.join(__dirname, 'public')));
app.use('/static', express.static(__dirname + '/public'));
app.use(app.router);

var server = http.createServer(app);
var io = require('socket.io').listen(server);

// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);
app.get('/input', input.list);

app.use(express.cookieParser());
app.use(express.session({secret: '1234567890QWERTY'}));

server.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});


io.on('connection', function(socket){
    console.log('connecting');
    socket.on('disconnect', function(){
        console.log('disconnecting');
    //io.emit('newUser', currentName + ' disconnected from chat');
  });
  socket.on('submitProduct', function(msg){
      var myJSONText = JSON.stringify(msg);
    console.log('Submitting Product: ' + myJSONText);
  });
  //socket.emit('chat', "test");
});

/*var blobService = azure.createBlobService(storageAccount, accessKey);
//render blobs with blobs.jade view
blobService.listBlobs(container, function (error, blobs) {
    response.render('blobs', {
  13:             error: error,
  14:             container: container,
  15:             blobs: blobs
  16:         });
  17:     });
*/