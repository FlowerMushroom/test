var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/jsonp",function(req,res,next){
  setTimeout(()=>{
    res.jsonp({text:"hello world"})
  },1000*3)
})

router.get("/json",function(req,res,next){
  res.header({"Access-Control-Allow-Origin":"*"});
  res.json({text:"hello world"})
})

//router.post("/json",function(req,res,next){
  //res.header({"Access-Control-Allow-Origin":"*"});
  //res.json({method:"post"})
//})

router.delete("/json",function(req,res,next){
  res.header({"Access-Control-Allow-Method":"*"});
  res.header({"Access-Control-Allow-Origin":"*"});
  res.json({method:"delete"})
})

router.get("/json",function(req,res,next){
  res.header({"Access-Control-Allow-Origin":"*"});
  res.json({text:"hello world"})
})

router.post("/json",function(req,res,next){
  res.header({"Access-Control-Allow-Origin":"*"});
  if(req.body["username"] == "mafengshe"){
    res.json({errno:1,errmsg:"用户名已经存在",data:{}});
  }
  else
  {
    res.json({errno:0,errmsg:"注册成功",data:{}});
  }
})

module.exports = router;
