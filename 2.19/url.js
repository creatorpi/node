var http=require("http");
var url=require("url");
http.createServer((req,res)=>{
    if(req.url=="/favicon.ico"){
        return;
    }
    res.writeHead(200,{"Content-Type":"text/html;charset=UTF8"});
    // url.parse
    //第一个参数为路径    第二个参数  可选  true  转换为对象
    var obj=url.parse(req.url,true).query;
    console.log(obj.name);
    res.end("姓名："+obj.name);
}).listen(3000);




/*http://localhost:3000/red?aa=bb&cc=d
*  hash: null,
 search: '?aa=bb&cc=d',
 query: 'aa=bb&cc=d',
 pathname: '/red',
 path: '/red?aa=bb&cc=d',
 href: '/red?aa=bb&cc=d' */