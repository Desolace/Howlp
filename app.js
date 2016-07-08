//Adapted from https://github.com/olalonde/node-yelp

// Request API access: http://www.yelp.com/developers/getting_started/api_access
var Yelp = require("yelp");
var http = require("http");
var express = require("express");
var app = express();

var yelp = new Yelp({
  // consumer_key: 'your-consumer-key',
  consumer_key: "",
  // consumer_secret: 'consumer-secret',
  consumer_secret: "",
  // token: 'token',
  token: "",
  // token_secret: 'token-secret',
  token_secret: "",
});


// See http://www.yelp.com/developers/documentation/v2/search_api
var returnedData;
app.set("json callback name", "cb");

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get("*", function (req, res, next){
  console.log(req.url);
  var incData = req.url.split(",");
  console.log(incData);
  var inx1 = incData[1].toString();
  console.log(inx1);
  var inx3 = incData[3].toString();
  console.log(inx3);
  var inx5 = incData[5].toString();
  yelp.search({ term: inx1, location: inx3, offset: inx5 })
  .then(function (data) {
    res.jsonp(data);
    console.log("Success!____________________");
  })
  .catch(function (err) {
    console.error(err);
  });

  //next();
});


app.listen(3000, function () {
  console.log("Listening on port 3000")
});
