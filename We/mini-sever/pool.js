const mysql = require('mysql');
var pool=mysql.createPool({
    host:'127.0.0.1',
    user:'root',
    password:'',
    database:'web1806',
    connectionLimit:10
});
//导出
module.exports=pool;