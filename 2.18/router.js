/*
 * 需求：老师和学生的查询
 * 1.如果路径为/student  就输出学生的6位学生id
 * 2.如果路径为/teacher  就输出老师的6位教师id
 * 3.如果匹配不上，则返回404页面
* */
var http=require("http");
var fs=require("fs");
//var express=require("express");
//var app=express();
var reg=/^\d{6}$/;

http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    var type=req.url.substr(0,9);
    var num=req.url.substr(9);
    if(type=="/student/"){
        if(reg.test(num)){
            res.end("我是学生，我的学号是"+num)
        }else if(num.length==0){
            fs.readFile("test2/student.html",(err,data)=>{
                res.end(data);
            });
        }else {
            fs.readFile('test2/404.html',function(err,data){
                res.end(data)
            })
        }
    }else if(type=="/teacher/"){
        if(reg.test(num)){
            res.end("我是老师，我的教师id是"+num)
        }else if(num.length==0){
            fs.readFile("test2/teacher.html",(err,data)=>{
                res.end(data);
            });
        }else {
            fs.readFile('test2/404.html',function(err,data){
                res.end(data)
            })
        }
    }else {
        fs.readFile('test2/404.html',function(err,data){
            res.end(data)
        })
    }




    /*switch (type){
        case "/student":if(reg.test(num)){
            res.end("我是学生，我的学号是"+num)
        }else if(num.length==0){
            fs.readFile("test2/student.html",(err,data)=>{
                res.end(data);
            });
        }else {
            fs.readFile('test2/404.html',function(err,data){
                res.end(data)
            })
        }
            break;
        case "/teacher":if(reg.test(num)){
            res.end("我是老师，我的教师id是"+num)
        }else if(num.length==0){
            fs.readFile("test2/teacher.html",(err,data)=>{
                res.end(data);
            });
        }else {
            fs.readFile('test2/404.html',function(err,data){
                res.end(data)
            })
        }
            break;
    }*/
}).listen(3000);