var http=require("http");
var fs=require("fs");
var http=require("http");
var fs=require("fs");
http.createServer((req,res)=> {
    if (req.url == "/favicon.ico") {
        return;
    }
    //读目录   readdir
   /*fs.readdir("test1",(err,data)=>{
       if(err){
           return false;
       }else {
           console.log("读取成功");
           console.log(data);
           res.end("success")
       }
   })*/

    //修改名称   rename
    /*fs.rename("test1/2.txt","test1/3.txt",(err)=>{
        if(err){
            console.log(err);
            return false;
        }else {
            res.end("success");
        }
    })*/


}).listen(3000);
