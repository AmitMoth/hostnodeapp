var express=require('express');

var port=process.env.PORT || 7000;
var app=express();


app.get('/',function(req,res){
    res.send('Express is working!!');
  });

app.get('/api/test',function(req,res){
    res.send('My first api on heroku');
});

app.listen(port,()=>{
    console.log('Running');
})


