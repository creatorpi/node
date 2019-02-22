var http=require("http");
http.createServer((req,res)=>{
    if(req.url=="/favicon.ico"){
        return;
    }
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    //console.log(res);
    //write可以解析html标签
    res.write("<h1>我是h1标签</h1>");
    res.end((1+2+3).toString());    //res.end()必须是字符串
}).listen(3000);



