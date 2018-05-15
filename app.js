var express = require("express");
var favicon = require("serve-favicon");
var app = express();
app.set("view engine", "ejs");
app.use(favicon(__dirname + '/public/images/favicon.ico'));
app.use(express.static(__dirname + '/public'));

app.get("/", function(req, res) {
  res.render("index");
})


app.listen(process.env.PORT || 3000, process.env.IP, function() {
  console.log("Server running");
});
