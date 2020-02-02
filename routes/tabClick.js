const con=require('./dbcon'); //con은 connnection, 
const express=require('express');
const router=express.Router();

router.post('/', (req,res)=>{   
    const sql_top=`select * from item where category='${req.body.category}'`;

    con.query(sql_top, (err, result)=>{
        if(err){
            console.log(err);
        }else{
            res.render('tab', {item_result:result});
        }
    });
});
module.exports=router;
