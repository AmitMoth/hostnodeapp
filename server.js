var express=require('express');

var app=express();


app.get('/',()=>{
    console.log('My first app on heroku!');
});

app.get('/api/test',function(req,res){
    res.send('Express is working!!');
  });
app.listen(7000,()=>{
    console.log('Running');
})


