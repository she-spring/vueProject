//连接数据库
const mongoose = require("mongoose");
const DB_URL ='mongodb://127.0.0.1:27017/vue-project';

mongoose.connect(DB_URL,{useNewUrlParser: true});
mongoose.connection.on('connected',()=>{
    console.log("数据库已连接");
});
mongoose.connection.on('disconnected',()=>{
    console.log("数据库链接失败");
});
mongoose.connection.on('error',()=>{
    console.log("数据库链接异常");
});

//将数据库暴露
module.exports=mongoose;
