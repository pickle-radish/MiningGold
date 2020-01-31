const indexRouter=require('./routes/index');
const express=require('express');
const session=require('express-session');
const path=require('path');
const app=express();

app.set('view engine','ejs');
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use('/',indexRouter);

app.listen(3000,()=>{
    console.log("server ready...");
});