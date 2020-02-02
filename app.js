const toptabRouter=require('./routes/tabClick');
const logoutRouter=require('./routes/logout');
const loginRouter=require('./routes/login');
const registerRouter=require('./routes/register');
const indexRouter=require('./routes/index');
const express=require('express');
const session=require('express-session');
const path=require('path');
const app=express();

app.set('view engine','ejs');
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(session({
    resave:false,
    saveUninitialized:true,
    secret:"gold",
    cookie:{
        httpOnly:true,
        secure:false
    }
}));

app.use('/tab', toptabRouter);
app.use('/logout', logoutRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/',indexRouter);

app.listen(3000,()=>{
    console.log("server ready...");
});