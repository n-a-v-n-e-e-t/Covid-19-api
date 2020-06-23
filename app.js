const express = require('express');
const app     = express();
const port    = process.env.PORT;

app.use(express.static(__dirname+'/public'));
app.set('view engine','ejs');

const globalData =  require('./utils/globalData');
const indianData =  require('./utils/india');
app.get('/',(req,res)=>{
    res.redirect('/home');
});

app.get('/home',(req,res)=>{
    globalData()
    .then(data=>{
        res.render('home',{data : data})
    })
    .catch(err=> res.render('page404'));

});

app.get('/india',(req,res)=>{
    indianData().then(data=>{
        res.render('india',{data : data})
    }).catch(err=>console.log(err));

});

app.get('*',(req,res)=>{
    res.render('page404');
});

app.listen(port,()=>{
    console.log('server started on port ',port);
});