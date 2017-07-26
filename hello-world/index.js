// var express=require('express');
// var app=express();
// //有路由的时候，最好引入route
// var routes=require('./routes')(app);
// //下面语句会在浏览器中打开当前目录的public子目录
// //严格的说，是打开public目录的index.html文件
// //如果public目录中有一个图片文件，那么可以用http://localhost:8080/my_image.png访问该文件
// //app.use(express.static(__dirname+'/public'));
//
// app.listen(8080);

//2运行原理
//2.1底层：http模块
// var http=require('http');
// var app=http.createServer(function(req,res) {
//     res.writeHead(200,{"Content-Type":"text/plain"});
//     res.end("Hello World");
// });
//
// app.listen(3000,"localhost");

//2.2中间件，是处理http请求的函数
//特点：一个中间件处理完，传递给下一个中间件，在app运行过程中，会调用一系列的中间件

//use是express注册中间件的方法，他返回一个函数
// var express = require('express');
// var http = require("http");
// var app = express();
//
// app.use(function(req, res, next) {
//     console.log("In comes a " + req.method + " to " + req.url);
//     next();
// });
// app.use(function(req, res,next) {
//     res.writeHead(200, {
//         "Content-Type": "text/plain"
//     });
//     console.log("第二个中间件");
//     next();
// });
// app.use(function(req,res) {
//     console.log("第三个中间件");
//     res.end("Hello World");
// });
//
// http.createServer(app).listen(1337);

//2.3use方法
//use方法内部可以对访问路径进行判断，据此能实现简单的路由，根据不同的请求网址，返回不同的网页内容
// var express = require("express");
// var http = require("http");
//
// var app = express();
//
// app.use("/home", function(request, response, next) {
//     response.writeHead(200, {
//         "Content-Type": "text/plain"
//     });
//     response.end("Welcome to the homepage!\n");
// });
//
// app.use("/about", function(request, response, next) {
//     response.writeHead(200, {
//         "Content-Type": "text/plain"
//     });
//     response.end("Welcome to the about page!\n");
// });
//
// app.use(function(request, response) {
//     response.writeHead(404, {
//         "Content-Type": "text/plain"
//     });
//     response.end("404 error!\n");
// });
//
// http.createServer(app).listen(1337);

//3 Express的方法
//3.1 all方法和HTTP动词方法
var express = require("express");
var http = require("http");
var app = express();

//all方法表示所有的请求必须通过该中间件
// app.all("*", function(request, response, next) {
//     response.writeHead(200, {
//         "Content-Type": "text/plain"
//     });
//     next();
// });
//
// app.get("/", function(request, response) {
//     response.end("Welcome to the homepage!");
// });
//
// app.get("/about", function(request, response) {
//     response.end("Welcome to the about page!");
// });
//
// app.get("*", function(request, response) {
//     response.end("404!");
// });
// //除了get方法以外，Express还提供post、put、delete方法，即HTTP动词都是Express的方法。
//
// http.createServer(app).listen(1337);

//3.2set方法
//用于指定变量的值
// app.set("views",__dirname+"/views");
// app.set("view engine","jade");

//3.3response对象
//(1)response.redirect()方法
//该方法允许网址的重定向
// response.redirect("/hello/anime");
// response.redirect("http://www.baidu.com");
// response.redirect(301,"http://www.baidu.com");
// //(2)response.sendFile()方法
// //该方法用于发送文件
// response.sendFile("/path/to/anime.mp4");
// //(3)response.render()方法
// //该方法用于渲染网页模板
// app.get(("/",function(req,res) {
//     res.render("index",{message:"Hello world"});//将message变量传入index模板，渲染成html网页
// }));

//3.4request对象
//(1)request.ip 该属性用于获得http请求的ip地址
//(2)request.files  该属性用于获取上传的文件

//3.5搭建https服务器
// var fs=require('fs');
// var options={
//     key:fs.readFileSync('E://ssl/myserver.key'),
//     cert:fs.readFileSync('E://ssl/myserver.crt'),
//     passphrase:'1234'
// };
// var https = require('https');
// var express = require('express');
// var app = express();
//
// app.get('/', function(req, res){
//   res.send('Hello World Expressjs');
// });
//
// var server = https.createServer(options, app);
// server.listen(8084);
// console.log('Server is running on port 8084');
