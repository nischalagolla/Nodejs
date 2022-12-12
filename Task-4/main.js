const express = require('express');
const port = process.env.NODE_PORT || 5000;

const server = express();

server.set('views', __dirname + '/view'); 
server.set("view engine", "ejs");

server.use(express.urlencoded({ extended: true }));
server.use(express.json());

let items= 
    [
        { Item: "mobile", Price: "20000" },
        { Item: "laptop", Price: "150000" },
        { Item: "handbag", Price: "5000" }

    ]
server.get("/login", (req, res)=>{
    res.render("login", {errorMessage: ""});
});

server.post("/login", (req, res)=>{
    console.log(req.body)
    if(!!req.body.user && req.body.user===req.body.pass){
        res.render("welcome", {username: req.body.user, results: items })
    } else {
        res.render("login", {errorMessage: "Something bad happenned"});
    }
    
});

server.post("/welcome", (req, res)=>{
    console.log(req.body)
    res.render("invoice", {Username: req.body.Username, Item: req.body.Item, Price: req.body.Price})
});






server.listen(port, function(){
    console.log("App is running at: "+port);
})