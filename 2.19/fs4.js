var http=require("http");
var fs=require("fs");
http.createServer((req,res)=>{
    if(req.url=="/favicon.ico"){
        return;
    }
    //stat  判断当前的文件是目录还是单独的文件
    fs.stat("test",(err,stats)=>{
        if(err){
            console.log(err);
            return false;
        }else {
            console.log(stats);
            console.log(`文件${stats.isFile()}`);
            console.log(`目录${stats.isDirectory()}`);
            return false;
            res.end();
        }
    })

}).listen(3000);



