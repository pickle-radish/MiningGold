const con=require('./dbcon');
const express=require('express');
const router=express.Router();

router.post('/', (req,res)=>{
    const sql=`select * from user where id=${con.escape(req.body.id)} and pw=${con.escape(req.body.pw)}`;
    con.query(sql, (err, result)=>{
        if(err){
            console.log(err);
            console.log(sql);
            res.json({message:"로그인 실패"});
        }else{
            if(result[0]){
                req.session.name=result[0].name;
                res.json({message:"로그인 되었습니다"});
            }else{
                res.json({message:"ID와 PW를 확인해주세요"});
            }
        }
        
    });
});

module.exports=router;