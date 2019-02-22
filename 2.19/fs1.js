var http=require("http");
var fs=require("fs");
http.createServer((req,res)=>{
    if(req.url=="/favicon.ico"){
        return;
    }
    //res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    //mkdir  创建文件夹
    /*fs.mkdir("image",(err)=>{
        if(err){
            return false;
        }else {
            res.end("success");
        }
    });*/


    //rmdir  删除文件夹
    /*fs.rmdir("image",(err)=>{
        if(err){
            return false;
        }else {
            res.end("success");
        }
    })*/

}).listen(3000);

