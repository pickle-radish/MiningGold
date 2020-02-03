const express=require('express');
const con=require('./dbcon');
const router=express.Router();

router.post('/', async (req,res)=>{
    
    const buy_sql=`insert into inventory (user_name, item_id) values ('${req.session.name}', '${req.body.item_id}')`;
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

    const item_sql=`select * from item where item_id=${req.body.item_id}`;
    let set_inventory=()=>{
        return new Promise((resolve,reject)=>{
            con.query(item_sql, (err, result)=>{
                if(err){
                    console.log(err);
                }else{
                    const inventory_sql=`select * from inventory as i join item on i.item_id=item.item_id where user_name='${req.session.name}' and category='${result[0].category}'`;
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
    res.render('tab', {inventory_result, isShop:false});
});

module.exports=router;