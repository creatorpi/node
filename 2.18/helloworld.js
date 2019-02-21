//模块化   common.js     require.js     cmd和amd的区别
//http 协议    服务器模块  作用：搭建服务器
//es6  import（导入）   require（加载）
//require
//引入http模块
var http=require("http");
//创建服务器
/*http.createServer(function(){
    console.log(arguments)
}).listen(3000);*/
//es6  箭头函数   作用：避免this指向的改变
//async  await  异步  配合promise使用  es7
//参数   request  请求   response  响应
http.createServer((req,res)=>{
    //响应结束   res=response  响应  end  结束
    //console.log(res)
    //console.log(arguments);
    //res.end("hello world");
    //writeHead   写入响应头   Content-Type 文本类型
    //html  编码格式   utf-8
    //res.writeHead(状态码，{文本类型  })
    res.writeHead(200,{"Content-Type":"text/html;charset=UTF8"});
    res.end("我爱你祖国");
    //localhost和127.0.0.1等价
}).listen(3000);
//listen()监听   参数是一个端口
/*
* 执行
* cmd打开文件位置  输入node helloworld.js+回车
* 浏览器输入localhost:3000
* */




