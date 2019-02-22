/*
* 输出test下面的所有文件
* 把是目录的单独输出出来
* */

var http=require("http");
var fs=require("fs");
http.createServer((req,res)=>{
    if(req.url=="/favicon.ico"){
        return false;
    }

    fs.readdir("test",(err,data)=>{
        if(err){
            return false;
        }else {
            console.log(data);
            var arr=data;
            //第一种
            /*var fileArr=[];
            for(var k in arr){
                fs.stat("test/"+arr[k],(err,stats)=>{
                    if(err){
                        return false;
                    }else if(stats.isDirectory()){
                        fileArr.push(arr[k]);
                        console.log(fileArr);
                    }
                })
            }*/



            //第二种
            var fileArr=[];
            (function getDir(i){
                if(i==arr.length){
                    console.log("目录");
                    return false;
                }
                fs.stat("test/"+arr[i],(err,stats)=>{
                    if(err){
                        return false;
                    }else if(stats.isDirectory()){
                        fileArr.push(arr[i]);
                        console.log(fileArr);
                    }
                    //递归函数
                    getDir(i+1);
                })
            })(0);

            res.end("success")
        }
    })
}).listen(3000);



