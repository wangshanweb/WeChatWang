const express=require("express");
const mysql=require("mysql");
const pool=require("./pool");
const app=express();
app.listen(3000,()=>{
    console.log("success");
});
app.use(express.static(__dirname+"/public"));
//1.1轮播图
app.get("/imagelist",(req,res)=>{
    var sql="SELECT id,img_url,title FROM xz_wximage";
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        res.send(result);
    });
});
//1.2好物推荐
app.get("/goodslist",(req,res)=>{
	var sql="SELECT `id`, `img_url`, `title`, `oldPrice`, `newPrice` FROM `xz_wxgoods`";
	pool.query(sql,(err,result)=>{
	 if(err) throw err;
	 res.send(result);
	})

})

//2.信息列表  message.wxml
app.get("/message",(req,res)=>{
    var rows=[];
    rows.push({
        title:"宝贝的兔兔",
        date:"2018-11-11",
        img_url:"http://127.0.0.1:3000/img/tutu.png",
        desc:"为你的宝贝挑选用品吧"
    });
    rows.push({
        title:"儿童音乐盒子器具",
        date:"2018-11-11",
        img_url:"http://127.0.0.1:3000/img/wanju.png",
        desc:"让宝贝开始玩音乐吧"
    });
    rows.push({
        title:"小摇摇",
        date:"2018-11-11",
        img_url:"http://127.0.0.1:3000/img/wanju1.png",
        desc:"摇啊摇，摇到外婆桥！"
    });
    rows.push({
        title:"❤意为你",
        date:"2018-11-11",
        img_url:"http://127.0.0.1:3000/img/wanju3.png",
        desc:"全心全意只为你"
    });
    rows.push({
        title:"天才儿童",
        date:"2018-11-11",
        img_url:"http://127.0.0.1:3000/img/wanju4.png",
        desc:"天才第一步...！"
    });
	rows.push({
        title:"一辈（杯）子",
        date:"2018-11-11",
        img_url:"http://127.0.0.1:3000/img/wanju5.png",
        desc:"陪你一辈子！"
    });
    res.send(rows);
});
/**
 * 详情列表detail
 */
app.get("/product",(req,res)=>{
    var pid=req.query.pid;
    var obj={
        pid:pid,
        title:"宝贝用品",
        oldprice:1999.99,
        newprice:1111.11,
        info:"快来打扮你的萌宝吧！"
    };
    res.send(obj);
})
//分页商品列表
app.get("/produts",(req,res)=>{
    var pno=req.query.pno;
    var pageSize=req.query.pageSize;
    var sql="SELECT count(id) as c FROM product";
    var process=0;
    var obj={pno:pno,pageSize:pageSize}
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        var pageCount=Math.ceil(result[0].c/pageSize);
        process+=50;
        obj.pageCount=pageCount;
        if(process==100){
            res.send(obj);
        }
    })
    var sql=" SELECT * FROM product";
        sql+=" LIMIT ?,?";
        var offset=parseInt((pno-1)*pageSize);
        pageSize=parseInt(pageSize);
        pool.query(sql,[offset,pageSize],(err,result)=>{
            if(err) throw err;
            process+=50;
            obj.data=result;
            if(process==100){
                res.send(obj);
            }
        });
});

const qs=require("querystring");
app.post("/addUser",(req,res)=>{
    //var u=req.body.uname;
    //var p=req.body.upwd;
    req.on("data",(buff)=>{
        //uname=tom&upwd=123
        //buff.toString();
        var obj=qs.parse(buff.toString());
        res.send(obj);
    });
});
