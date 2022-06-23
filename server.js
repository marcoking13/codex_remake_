const express = require("express");
const bodyParser = require("body-parser");
const middleware = require("middleware");
const port = 3001;
var path = require('path')
const app = express();

app.use(path,bodyParser);
app.listen(port,()=>{
console.log("app running on Port "+port);
 console.log(__dirname)});

app.get('/',function(req,res) {
  res.sendFile(__dirname+"/index.html");
});



app.use('/img',express.static(path.join(__dirname, '/assets/img')));
app.use('/js',express.static(path.join(__dirname, '/assets/js')));
app.use('/css',express.static(path.join(__dirname, '/assets/css')));
app.use('/config',express.static(path.join(__dirname, '/assets/config')));
