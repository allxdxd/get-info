const express = require('express');
const parser = require('ua-parser-js');
const app = express();

app.use(express.static(__dirname + "/public"))

app.post('/send', function (req, res) {
  var ua = parser(req.headers['user-agent'])
  console.log(ua);
});

app.listen(3000, ()=>{console.log("It's runnig");});
