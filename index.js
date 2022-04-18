// Create NPM card 
const express = require("express");
const app = express();
const path = require('path');
const multer = require('multer');
const upload = multer();
const cookieParse = require('cookie-parser');
const url = require('url');

app.use(cookieParse());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 
app.use(upload.array());

app.use(express.static(__dirname + '/public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.enable('verbose errors');

let data = {
  "username": "kokonut27",
  "description": "Full-stack developer who loves anime <3",
  "languages": [
    "nodejs",
    "html/css",
    "python"
  ],
  "tools": [
    "replit",
    "github",
    "glitch"
  ]
};

app.get("/", (req, res) => {
  res.render('index');
});

app.listen(8080, () => {
  console.log('portfolio is running!');
});