const express=require('express');
const con=require('./dbcon');
const router=express.Router();

router.post('/item', async (req,res)=>{
    const name=req.session.name;
    
    const buy_sql=`insert into inventory (user_name, item_id) values ('${name}', '${req.body.item_id}')`;
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

    const user_sql=`select * from user where name='${name}'`;
    let get_gold=()=>{
        return new Promise((resolve,reject)=>{
            con.query(user_sql, (err, result)=>{
                if(err){
                    console.log(err);
                }else{
                    resolve(result[0].gold);
                }
            });
        });
    };

    const item_sql=`select * from item where item_id=${req.body.item_id}`;
    let set_inventory=(gold)=>{
        return new Promise((resolve,reject)=>{
            con.query(item_sql, (err, result)=>{
                if(err){
                    console.log(err);
                }else{
                    const spend_gold=`update user set gold=${req.body.price}-${result[0].price} where name='${name}'`;
                    con.query(spend_gold, (err)=>{
                        if(err){
                            console.log(err);
                        }
                    });
                    const inventory_sql=`select * from inventory as i join item on i.item_id=item.item_id where user_name='${name}' and category='${result[0].category}'`;
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
    let gold = await get_gold();
    let inventory_result = await set_inventory(gold);
    res.render('tab', {inventory_result, isShop:false });
});

router.post('/set_gold', (req,res)=>{
    const sql=`select gold from user where name='${req.session.name}'`;
    con.query(sql, (err, result)=>{
        if(err){
            console.log(err);
        }else{
            res.json({gold:result[0].gold});
        }
    });
});

module.exports=router;