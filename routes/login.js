const con=require('./dbcon');
const express=require('express');
const router=express.Router();

router.post('/', (req,res)=>{
    const sql=`select * from user where id='${req.body.id}' and pw='${req.body.pw}'`;
    con.query(sql, (err, result)=>{
        if(err){
            res.json({message:"로그인 실패"});
        }else{
            if(result[0]){
                req.session.name=result[0].name;
                req.session.lv=result[0].lv;
                req.session.exp=result[0].exp;
                req.session.stage=result[0].stage;
                res.json({message:"로그인 되었습니다"});
            }else{
                res.json({message:"ID와 PW를 확인해주세요"});
            }
        }
        
    });
});

module.exports=router;