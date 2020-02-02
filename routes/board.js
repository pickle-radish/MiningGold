const con=require('./dbcon');
const express=require('express');
const router=express.Router();

router.post('/', (req,res)=>{   
    const sql_board=`select * from board where board='${req.body.board}'`;

    con.query(sql_board, (err, result)=>{
        if(err){
            console.log(err);
        }else{
            res.render('board', {result});
        }
    });
});
module.exports=router;