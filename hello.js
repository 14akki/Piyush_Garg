const http = require("http")
const express= require('express');
const fs= require("fs");


const app= express();


//middle ware - plugin

app.use(express.urlencoded({extended:false}))
app.use((req, res, next)=>{
    console.log("hello from middelware 1")
})


//Router
app.get('/',(req, res)=>{
    return res.send("hello from home page")
});

app.get('/about',(req, res)=>{
    return res.send(`hello  ${req.query.name}`); 
})

app.post('/post')
 
app.listen(8000,()=> console.log("server started"))


// console.log("math value is ", math.add(3,4));
// console.log("sub value is ",math.sub(10,4) );
// console.log("mul of two value is", math.mul(10,2))

// const myServer= http.createServer((req, res)=>{
//     console.log("new req");
//     res.end("hello from server");
// });


// const myHandler= (req, res)=>{
// const myServer = http.createServer((req, res) => {
//     const log = `${Date.now()}: ${req.url}New Req Received\n`
//     const myUrl= url.parse(req.url)
//     console.log(myUrl)
//     fs.appendFile("log.txt", log, (err, date) => {
//         switch (myUrl.pathname) {
//             case '/':
//                 res.end("home page");
//                 break;
//             case '/about':
//                 res.end("I am ankit singh");
//                 break;
//             default:
//                 res.end("404 result not found")
//         }
//         res.end("hello from Server Again 8k")
//     })
// });
// }



// const log= `${Date.now()}:${req.url} New Req Received\n`
// fs.appendFile("log.txt", log,(err, data)=>{
//     switch(req.url){
//         case'/':res.end("home Page");
//         break
//         case'/about':res.end("I am ankit singh");
//         break
//         default: res.end("400 not found")
//     }
// })


// myServer.listen(8000, () => console.log("Server Started"));

// const myServer = http.createServer((req, res) => {
//     const log = `${Date.now()}:${req.url} New Req Received\n`;
//     fs.appendFile("log.txt", log, (err) => {
//         if (err) {
//             console.error("Error writing to log file:", err);
//             res.statusCode = 500;
//             res.end("Internal Server Error");
//             return;
//         }

//         switch (req.url) {
//             case '/':
//                 res.end("Home Page");
//                 break;
//             case '/about':
//                 res.end("I am Ankit Singh");
//                 break;
//             default:
//                 res.statusCode = 404;
//                 res.end("404 Not Found");
//         }
//     });
// });

// myServer.listen(3000, () => {
//     console.log("Server is listening on port 3000");
// });