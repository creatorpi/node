var http=require("http");
http.createServer((req,res)=>{
    //console.log(req);
    //res.end(req.toString());
    //req.url  取到地址栏/后面所有的字段    http://localhost:3000/red?123=456
    console.log(req.url);
    res.end("success");
}).listen(3000);
