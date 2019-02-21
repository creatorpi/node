//fs=file system  文件系统
//把1.txt中的内容读取出来
var http=require("http");
var fs=require("fs");
http.createServer((req,res)=>{
    //readFile   读文件    参数   文件路径  回调函数  参数  err  data
    fs.readFile("test/1.txt",(err,data)=>{
        //console.log(arguments)
        res.end(data)
    });
    //res.end()
}).listen(3000);



