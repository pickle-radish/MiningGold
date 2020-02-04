const express=require('express');
const con=require('./dbcon');
const router=express.Router();

router.post('/', (req,res)=>{
    const name=req.session.name;
    const hp_sql=`select hp from user where name='${name}'`;
    con.query(hp_sql, (err,result)=>{
        if(err){
            console.log(err);
        }else{
            const hp_result=result[0].hp;
            const attack_sql=`update user set hp=${hp_result}-1 where name='${name}'`;
            con.query(attack_sql, (err,result)=>{
                if(err){
                    console.log(err);
                }else{
                    
                }
            });
        }
    });
});

module.exports=router;