const http = require('http');
const express = require("express")
const app = express();

app.set("view engine", 'ejs');
app.use(express.static("public"))

app.get("/", function(req, res) {
    res.render("login");
})

app.get("/signup", function(req, res) {
    res.render("signup");
})

app.listen(3000, '127.0.0.1');
console.log('Server is running on port 3000')