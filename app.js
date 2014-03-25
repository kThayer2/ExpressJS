var GitHubApi = require("node-github");

var github = new GitHubApi({
version: "3.0.0"
});

var msg = {user: "joyent", repo: "node", number: "25"};
var funct = function(err, res) { console.log(JSON.stringify(res)); };
var repo = github.pullRequests.getCommits.getFromUser(msg, funct);

var express = require('express');
var app = express();

app.get('/commits.txt', function(req, res){
  funct;
});


var colors = require('colors');

colors.setTheme({
  lightBlue: 'lightblue'
});