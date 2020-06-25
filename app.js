const express = require('express');
const app     = express();
const port    = process.env.PORT;

app.use(express.static(__dirname+'/public'));
app.set('view engine','ejs');

const globalData =  require('./utils/globalData');
const news       =  require('./utils/news');
const indianData    = require('./utils/india')


app.get('/',(req,res)=>{
    res.redirect('/home');
});

app.get('/home',(req,res)=>{
    
    globalData.getGlobal_data()
    .then(data=> res.render('home',{data : data}))
    .catch(err=>res.render('page404'))
});

app.get('/india',(req,res)=>{
    
    indianData().then(data=>{
        news()
        .then(updates=> res.render('india',{data : data,updates:updates}))
        }).catch(err=>console.log(err));
});
    
app.get('/global',(req,res)=>{
//     globalData.tabledata().then(data=> res.send(data));
   globalData.tabledata()
   .then(table=> {res.render('global',{table:table})})
   .catch(err=> res.render('page404'))
});

app.get('*',(req,res)=>{
    res.render('page404');
});

app.listen(port,()=>{
    console.log('server started on port ',port);
});