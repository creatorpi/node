var http=require("http");
var url=require("url");
http.createServer((req,res)=>{
    if(req.url=="/favicon.ico"){
        return;
    }
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    // url.parse    把url转换成对象形式
    //第二个参数选择true，将选择的东西转换为对象
    var obj=url.parse(req.url,true).query;
    res.end("用户名："+obj.username+"密码："+obj.password)
}).listen(3000);
