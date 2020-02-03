const con=require('./dbcon');
const express=require('express');
const router=express.Router();

router.get('/', (req,res)=>{   
    const sql_board=`select * from board`;

    con.query(sql_board, (err, result)=>{
        if(err){
            console.log(err);
        }else{
            res.render('board', {result});
        }
    });
});
router.get('/write_form', (req,res)=>{   
    const sql_board=`select * from board`;

    con.query(sql_board, (err, result)=>{
        if(err){
            console.log(err);
        }else{
            res.render('board', {result});
        }
    });
});

router.get('/write', (req,res)=>{   
    res.render('write', {});
});


module.exports=router;