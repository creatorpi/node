var http=require("http");
var path=require("path");

//console.log(path)

/*resolve: [Function: resolve],     解析成正确的路径
 normalize: [Function: normalize],
 isAbsolute: [Function: isAbsolute],
 join: [Function: join],
 relative: [Function: relative],
 toNamespacedPath: [Function: toNamespacedPath],
 dirname: [Function: dirname],
 basename: [Function: basename],
 extname: [Function: extname],      取到文件扩展名
 format: [Function: format],
 parse: [Function: parse],*/

http.createServer((req,res)=>{
    //var url=path.resolve(req.url);
    //var url=path.extname("1.txt");

    console.log(url);
    res.end();
}).listen(3000);




