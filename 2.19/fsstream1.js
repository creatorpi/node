//fs流操作    stream
//事件流、文件流(读文件流、写文件流)
//node做的最好的地方：路由、数据的流向和接收
var http=require("http");
var fs=require("fs");
http.createServer((req,res)=>{
    if(req.url=="/favicon.ico"){
        return false;
    }
    //写入文件流
    var data="vbdibcvdcndkcjnkvae";
    const writeFileStream=fs.createWriteStream("test1/3.txt");
    //写入数据
    writeFileStream.write(data,"utf-8");
    //写入结束
    writeFileStream.end();
    //数据写入完成
    writeFileStream.on("finish",()=>{
        console.log("写入成功")
    });
    res.end()

}).listen(3000);

