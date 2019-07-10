var express = require("express");
var path = require("path");

var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, function() {
    console.log("App is listening on PORT " + PORT);
    console.log("http://localhost:" + PORT);
})