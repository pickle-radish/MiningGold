const express=require('express');
const con=require('./dbcon');
const router=express.Router();


router.post('/', (req, res)=>{
    const sql = `select * from user where name='${req.session.name}'`;
    con.query(sql, (err,result)=>{
        if(err){
            console.log(err);
        }else{
            const gold=result[0].gold + 1;
            const gold_sql=`update user set gold=${gold} where id='${result[0].id}'`
            con.query(gold_sql, (err)=>{
                if(err){
                    console.log(err);
                }else{
                    res.json({gold});
                }
            });
        }
    });
});

module.exports=router;