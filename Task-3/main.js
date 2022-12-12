var http = require('http');
var fs = require('fs');

const port = process.env.port || 9000;
let itemArray = 
    [
        { "name": "mobile", "pirce": 20000, "brand": "Moto" },
        { "name": "laptop", "pirce": 150000, "brand": "Mack" },
        { "name": "handbag", "pirce": 5000, "brand": "Guess" }

    ]

var server = http.createServer(function (req, res) {
    if (req.method === "GET" && req.url=="/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        fs.createReadStream("./home.html", "UTF-8").pipe(res);
    } else if (req.method === "GET" && req.url == "/items") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(itemArray))
    }
    else if(req.method === "GET" && req.url == "/submit") {
        var body = "";
        req.on("data", function (chunk) {
            body += chunk;
        });

        req.on("end", function () {
            res.writeHead(200, {
                "Content-Type": "text/html"
            }); 
            res.end(body);
        });
    } else {
        res.end("This is error")
    }
})

server.listen(port, ()=>{
    console.log("App is running at "+port)
});
    

