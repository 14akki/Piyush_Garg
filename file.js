const fs= require("fs");

// fs.writeFileSync("./test.txt", "hello world");

// fs.writeFile("./test.txt", "hello india win this time the world cup", (err, result)=>{
//     if(err){
//         console.log("error", err);
//     }else{
//         console.log("hello india please win the WC",result)
//     }
// })

// const result= fs.readFileSync("./contacts.txt", "utf-8")
// console.log(result);

// fs.readFile("./contacts.txt", "utf-8",(err, result)=>{
//     if(err){
//         console.log("error", err);
//     }else{
//         console.log(result)
//     }
// })

// fs.appendFileSync("./test.txt",new Date().getDate().toLocaleString());
// fs.appendFileSync("./test.txt",` ${Date.now()} Hey there\n`)
// fs.mkdirSync("my-docs")
fs.unlinkSync("/contacts.txt")



