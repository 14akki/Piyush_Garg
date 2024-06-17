const  http = require("http");

const myServer= http.createServer((req, res)=>{
    console.log(req.headers)
    res.end("hello from the server")
})

myServer.listen(9000, ()=> console.log("server started  990000 at"))