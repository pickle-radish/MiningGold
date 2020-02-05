const express=require('express');
const con=require('./dbcon');
const router=express.Router();

router.post('/item', async (req,res)=>{
    const name=req.session.name;
    
    const buy_sql=`insert into inventory (user_name, item_id) values (${con.escape(name)}, ${con.escape(req.body.item_id)})`;
    let buy_item=()=>{
        return new Promise((resolve,reject)=>{
            con.query(buy_sql, (err)=>{
                if(err){
                    console.log(err);
                }else{
                    resolve("구매완료");
                }
            });
        });
    };

    const item_sql=`select * from item where item_id=${con.escape(req.body.item_id)}`;
    let set_inventory=()=>{
        return new Promise((resolve,reject)=>{
            con.query(item_sql, (err, result)=>{
                if(err){
                    console.log(err);
                }else{
                    const spend_gold=`update user set gold=${con.escape(req.body.gold)} where name=${con.escape(name)}`;
                    con.query(spend_gold, (err)=>{
                        if(err){
                            console.log(err);
                        }
                    });
                    const inventory_sql=`select * from inventory as i join item on i.item_id=item.item_id where user_name=${con.escape(name)} and category=${con.escape(result[0].category)}`;
                    con.query(inventory_sql, (err, result)=>{
                        if(err){
                            console.log(err);
                        }else{
                            resolve(result);
                        }
                    });
                }
            });
        });
    }
    let message = await buy_item();
    let inventory_result = await set_inventory();
    res.render('tab', {inventory_result, isShop:false });
});

router.post('/set_gold', (req,res)=>{
    const sql=`select gold from user where name=${con.escape(req.session.name)}`;
    con.query(sql, (err, result)=>{
        if(err){
            console.log(err);
        }else{
            res.json({gold:result[0].gold});
        }
    });
});

module.exports=router;