var express = require('express');
var path = require('path');

/**
 * Initialize our application
 */
var app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', function(req, res){
	res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

var port = "8080";
app.listen(port, function(){
	console.log("App listening on " + port);
});