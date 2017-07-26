// //加载express模块，赋值给变量express
// var express=require('express');
//
// var api=require('./routes/api');
//
// var path = require('path');
// var favicon = require('serve-favicon');
// var logger = require('morgan');
// var cookieParser = require('cookie-parser');
// var bodyParser = require('body-parser');
// //生成express实例，赋值给变量app
// var app=express();
// // 加载hbs模块
// var hbs = require('hbs');
// // 加载数据模块
// var blogEngine = require('./blog');
//
// //设定express实例的参数
// //设定port变量，意为访问端口
// app.set('port',process.env.PORT||3000);
// //设定views变量，意为视图存放的目录
// app.set('views',path.join(__dirname,'views'));
// //设定view engine变量，意为网页模版引擎
// app.set('view engine','html');
//
// app.engine('html',hbs.__express);
//
//
// app.use(express.favicon());
// app.use(express.logger('dev'));
// app.use(express.bodyParser());
// app.use(express.methodOverride());
// app.use(app.router);
//
// //设定静态文件目录，比如本地文件
// //目录为demo/public/images,访问
// //网址则显示为http://localhost:3000/images
// app.use(express.static(path.join(__dirname,'public')));
//
// //设置监听端口
// app.listen(app.get('port'));
//
// // app.get('/', function(req, res) {
// //     var body = 'Hello World';
// //    res.setHeader('Content-Type', 'text/plain');
// //    res.setHeader('Content-Length', body.length);
// //    res.end(body);
// // });
//
// app.get('/api',api.index);
//
// //第一个参数表示要渲染的页面，第二个参数表示模版变量绑定的数据
// app.get('/', function(req, res) {
//    res.render('index',{title:"最近文章",entries:blogEngine,getBlogEntries()});
// });
//
// app.get('/about', function(req, res) {
//    res.render('about',{title:"自我介绍"});
// });
//
// app.get('/article/:id', function(req, res) {
//     var entry=blogEngine.getBlogEntry(req.params.id);
//    res.render('article',{title:entry.title,blog:entry});
// });
//
// //封装成模块并在开头引入
// // //指定特定路径
// // app.get('/api',function(req,res) {
// //     res.send({name:"张三",age:40});
// // });

var express = require('express');
var app = express();

var hbs = require('hbs');

// 加载数据模块
var blogEngine = require('./blog');

app.set('view engine', 'html');
app.engine('html', hbs.__express);
app.use(express.bodyParser());

app.get('/', function(req, res) {
   res.render('index',{title:"最近文章", entries:blogEngine.getBlogEntries()});
});

app.get('/about', function(req, res) {
   res.render('about', {title:"自我介绍"});
});

app.get('/article/:id', function(req, res) {
   var entry = blogEngine.getBlogEntry(req.params.id);
   res.render('article',{title:entry.title, blog:entry});
});

app.listen(3000);
