var http=require("http");
var url=require("url");
var fs=require("fs");
http.createServer((req,res)=>{
    if(req.url=="/favicon.ico"){
        return;
    }
    res.writeHead(200,{"Content-Type":"text/html;charset:UTF8"});
    var obj=url.parse(req.url,true).query;
        fs.readFile("index.html",(err,data)=>{
            res.write(`<p>${obj.username}</p>`);
            //console.log(data.toString());
            res.end(data);
        });
    //res.end()
}).listen(3000);




