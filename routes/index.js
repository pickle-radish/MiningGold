const express=require('express');
const con=require('./dbcon');
const router=express.Router();

router.get('/', async (req,res)=>{
    let item_result;
    let user_result=false;
    let monster_result;
    let inventory_result;

    if(req.session.name){
        name=req.session.name;

            const sql_user=`select name, lv, exp, stage from user where name='${name}'`;
            con.query(sql_user, (err,result)=>{
                if(err){
                    console.log(err);
                }else{
                    user_result=result[0];
                    const sql_monster=`select * from monster where m_lv=${user_result.stage}`;
                    let monster = ()=> {
                        return new Promise ((resolve,reject)=>{
                            con.query(sql_monster, (err, result)=>{
                                if(err){
                                    console.log(err);
                                }else{
                                    resolve(result);
                                }
                            });
                        });
                    };

                    const sql_item=`select * from item where category='${req.session.shop_category}'`;
                    let item = ()=> {
                        return new Promise((resolve,reject)=>{
                            con.query(sql_item, (err, result)=>{
                                if(err){
                                    console.log(err);
                                }else{
                                    resolve(result);
                                }
                            });
                        });
                    };
                    
                    const sql_inventory=`select * from inventory as i join item on i.item_id=item.item_id where user_id='${name}' and category='${req.session.inventory_category}'`;
                    let inventory = ()=>{
                        return new Promise((resolve,reject)=>{
                            con.query(sql_inventory, (err, result)=>{
                                if(err){
                                    console.log(err);
                                }else{
                                    resolve(result);
                                }
                            });
                        });
                    };

                    let response = ()=>{
                        return new Promise((resolve,reject)=>{
                         res.render('index',{user_result, item_result, monster_result, inventory_result});
                        });
                    }

                    const  run = async ()=>{
                        monster_result=await monster();
                        item_result=await item();
                        inventory_result=await inventory();
                        await response();
                    }

                    run();

                }
                
            }) ;            
        
    }else{
        res.render('index',{user_result});            
    }

});

module.exports=router;    