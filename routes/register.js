const con=require('./dbcon');
const express=require('express');
const router=express.Router();

router.post('/', (req,res)=>{
    const sql=`insert into user (id, pw, name) values(${con.escape(req.body.id)}, ${con.escape(req.body.pw)}, ${con.escape(req.body.name)})`;
    con.query(sql, (err)=>{
        if(err){
            res.json({message:"회원가입에 실패하였습니다"});           
        }else{
            res.json({message:"회원가입 되었습니다"});
        }
    });


});


module.exports=router;