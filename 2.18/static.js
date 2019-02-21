/*
* 需求：
* 1.创建服务器
* 2.如果地址栏字段是/red的时候就要读取red.html里面的内容
* 3.如果地址栏字段是/green的时候就要读取green.html里面的内容
* 4.在red.html中加入图片和css
* */

var http=require("http");
var fs=require("fs");
http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    /*if(req.url=="/red"){
        fs.readFile("test1/red.html",(err,data)=>{
            res.end(data);
        })
    }else if(req.url=="/green"){
        fs.readFile("test1/green.html",(err,data)=>{
            res.end(data);
        })
    }*/
    var type=req.url;
    switch(type){
        case "/red":fs.readFile("test1/red.html",(err,data)=>{
            res.end(data);
        });
            break;
        case "/green":fs.readFile("test1/green.html",(err,data)=>{
            res.end(data);
        });
            break;
        case "/red.css":fs.readFile("test1/red.css",(err,data)=>{
            res.writeHead(200,{"Content-Type":"text/css;charset=utf-8"});
            res.end(data);
        });
            break;
        case "/f2.png":fs.readFile("test1/f2.png",(err,data)=>{
            res.writeHead(200,{"Content-Type":"text/png;charset=utf-8"});
            res.end(data);
        });
            break;
        case "/favicon.ico":return;
            break;
    }

}).listen(3000);

