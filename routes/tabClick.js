const con=require('./dbcon'); //con은 connnection, 
const express=require('express');
const router=express.Router();

router.post('/', (req,res)=>{   
    const isShop=req.body.isShop;
        const sql_item=`select * from item where category=${con.escape(req.body.category)}`;

        con.query(sql_item, (err, result)=>{
            if(err){
                console.log(err);
            }else{
                const item_result=result;
                const sql_inven=`select * from inventory as i join item on i.item_id=item.item_id where user_name=${con.escape(req.session.name)} and category=${con.escape(req.body.category)}`;
        
                con.query(sql_inven, (err, result)=>{
                    if(err){
                        console.log(err);
                    }else{
                        const inventory_result=result;
                        res.render('tab', {item_result, inventory_result, isShop});
                    }
                });
            }
        });
    
});
module.exports=router;
