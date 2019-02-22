//创建文件    require  import
var http=require("http");
var fs=require("fs");
http.createServer((req,res)=>{
    if(req.url=="/favicon.ico"){
        return;
    }
    //删除文件   unlink
    /*fs.unlink("test1/1.txt",(err)=>{
        if(err){
            return false;
        }else {
            res.end("success")
        }
    })*/

    //追加文件   appendFile  形参  实参
    fs.appendFile("test1/2.txt","3333",(err)=>{
        if(err){
            return false;
        }else {
            res.end("success");
        }
    })

}).listen(3000);
