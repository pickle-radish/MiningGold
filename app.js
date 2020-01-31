const indexRouter=require('./routes/index');
const express=require('express');
const session=require('express-session');
const app=express();

app.set('view engine','ejs');
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use('/',indexRouter);

app.listen(3000,()=>{
    console.log("server ready...");
});