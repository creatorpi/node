var http=require("http");
var fs=require("fs");
http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    //readFile    读文件
    /*fs.readFile("1.txt",(err,data)=>{
        res.end(data);
    });*/
    //写文件    参数：路径，写入的内容，函数
   /* var data="yyyyyyyyy";
    fs.writeFile("1.txt",data,(err)=>{
        res.end("写入成功")
    })*/

}).listen(3000);

