var express = require('express');
var todoController = require('./controllers/todoController.js');
//
var app = express();
//
// // set up template engine
//
app.set('view engine', 'ejs');
//
// // static files
app.use(express.static('./public'))
//
// //listen to port
app.listen(3000);
console.log('You are listening to port 3000');
//
// //fire controllers
todoController(app);
