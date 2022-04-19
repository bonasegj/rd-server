/**
 * Module dependencies.
 */

 var express = require("express");
 //var express = require('../..');
 //var logger = require('morgan');
 //var path = require('path');
 var app = express();
 
 var versiom = "2";
 // log requests
 //app.use(logger('dev'));
 
 // express on its own has no notion
 // of a "file". The express.static()
 // middleware checks for a file matching
 // the `req.path` within the directory
 // that you pass it. In this case "GET /js/app.js"
 // will look for "./public/js/app.js".
 
 //app.use(express.static(path.join(__dirname, 'public')));
 app.use(
   express.static("home", {
     setHeaders: function (res, path) {
       console.log("res: " + res);
       console.log("path: " + path);
       if (path.includes("assets")) {
         console.log("attachment");
         res.set("Access-Control-Allow-Origin", "*");
         res.set("Access-Control-Allow-Headers", "Content-Type");
         res.set("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
         res.set("Content-Disposition", "attachment");
         res.type("application/octet-stream");
       } else {
         console.log("inline");
         res.set("Access-Control-Allow-Origin", "*");
         res.set("Access-Control-Allow-Headers", "Content-Type");
         res.set("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
         res.set("Content-Disposition", "inline");
         res.type("text/html");
       }
       //; filename='prueba.pdf'    JSON.stringify(res, null, 4)
     }
   })
 );
 //app.use(express.static());
 
 // if you wanted to "prefix" you may use
 // the mounting feature of Connect, for example
 // "GET /static/js/app.js" instead of "GET /js/app.js".
 // The mount-path "/static" is simply removed before
 // passing control to the express.static() middleware,
 // thus it serves the file correctly by ignoring "/static"
 //app.use('/static', express.static(path.join(__dirname, 'public')));
 
 // if for some reason you want to serve files from
 // several directories, you can use express.static()
 // multiple times! Here we're passing "./public/css",
 // this will allow "GET /style.css" instead of "GET /css/style.css":
 //app.use(express.static(path.join(__dirname, 'public', 'css')));
 
 app.listen(8080);
 console.log("listening on port 8080");
 //console.log('try:');
 //console.log('  GET /hello.txt');
 //console.log('  GET /js/app.js');
 //console.log('  GET /css/style.css');
 