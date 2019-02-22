//fs流操作    stream
//事件流、文件流(读文件流、写文件流)
//node做的最好的地方：路由、数据的流向和接收
var http=require("http");
var fs=require("fs");
http.createServer((req,res)=>{
    if(req.url=="/favicon.ico"){
        return false;
    }
    //读取文件流
    const readFileStream=fs.createReadStream("test1/3.txt");
    //读取的次数
    let num=0;
    //接收的数据
    let data="";
    //开始接收数据
    readFileStream.on("data",(chunk)=>{
        console.log(`${++num}次,--------------长度为${chunk.length}`);
        data+=chunk;
    });
    //接收数据完毕
    readFileStream.on("end",()=>{
        console.log("结束");
        console.log(num);
        console.log(data);
    });
    //报错
    readFileStream.on("err",(err)=>{
        console.log(err);
    });
res.end();
}).listen(3000);

