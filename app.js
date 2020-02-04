const attackRouter=require('./routes/attack');
const miningRouter=require('./routes/mining');
const buyRouter=require('./routes/buy');
const boardRouter=require('./routes/board');
const tabRouter=require('./routes/tabClick');
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

app.use('/attack', attackRouter);
app.use('/mining', miningRouter);
app.use('/buy', buyRouter);
app.use('/board', boardRouter);
app.use('/tab', tabRouter);
app.use('/logout', logoutRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/',indexRouter);

app.listen(3000,()=>{
    console.log("server ready...");
});