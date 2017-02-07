var express = require('express')
var cors = require('cors');
var app = express()

var whitelist = ['localhost', 'http://example2.com'];
var corsOptions = {
  origin: function(origin, callback){
    console.log(origin);
    var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
    callback(originIsWhitelisted ? null : 'Bad Request', originIsWhitelisted);
  }
};

app.get('/', cors(corsOptions), function (req, res) {
  
  res.send(req.headers.origin + ' ' + process.env.APPNUM);

})

app.listen(80, function () {
  console.log('Example app listening on port 80!')
})