const express=require('express');
const con=require('./dbcon');
const router=express.Router();

router.get('/', (req,res)=>{
    let name=false;
    let lv=0;
    let stage=1;
    let exp=0;
    if(req.session.name){
        name=req.session.name;
        lv=req.session.lv;
        stage=req.session.stage;
        exp=req.session.exp;
    }
    
    res.render('index',{name, lv, exp, stage});
});

module.exports=router;    