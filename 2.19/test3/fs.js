/*
* 判断是否有image文件夹
* 有的话输出里面的文件，反之创建一个image文件夹
* */

var http=require("http");
var fs=require("fs");
http.createServer((req,res)=>{
    if(req.url=="/favicon.ico"){
        return false;
    }

    fs.stat("image",(err,stats)=>{
        if(err){
            fs.mkdir("image",(err)=>{
                if(err){
                    return false;
                }else {
                    //res.end("success");
                    console.log("image里面的图片很好看")
                }
            });
            //return false;
        }else {
            if(stats.isDirectory()){
                fs.readdir("image",(err,data)=>{
                    if(err){
                        return false;
                    }else {
                        console.log("这是image文件夹");
                        console.log(data);
                        res.end();
                    }
                })
            }
        }
    })


}).listen(3000);


