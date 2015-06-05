var express = require("express");
var app = express();

app.set("view engine", "ejs");

var puppies = [];
var puppyId = 1;

app.get("/", function(req,res){
	res.render("index", {
		puppies:puppies
	});
});

app.get("/puppies", function(req, res){
	var puppy = {};
	puppy.newPuppyName = req.query.newPuppyName;
	puppy.age = req.query.age;
	puppy.puppyId = puppyId;
	puppyId++;
	puppies.push(puppy);
	console.log(puppies);
	res.redirect("/");
});

app.get("/puppies/new", function(req, res){
	res.render("puppies");
});

app.get("/puppies/:id", function(req, res){
	var idNumber = Number(req.params.id);
	res.render("id", {
		idNumber: idNumber,
		puppies: puppies
	});
});

app.listen(3000, function () {
	console.log("Now playing on channel 3000");
});