const express=require('express');
const con=require('./dbcon');
const router=express.Router();

router.get('/', (req,res)=>{
    let item_result;
    let user_result=false;
    let monster_result;
    let inventory_result;

    if(req.session.name){
        name=req.session.name;

        const sql_item=`select * from item`;
        con.query(sql_item, (err, result)=>{
            if(err){
                console.log(err);
            }else{
                item_result=result;
                
                const sql_user=`select name, lv, exp, stage from user where name='${name}'`;
                con.query(sql_user, (err,result)=>{
                    if(err){
                        console.log(err);
                    }else{
                        user_result=result[0];

                        console.log(user_result+"1");
                        const sql_monster=`select * from monster where m_lv=${user_result.stage}`;
                        con.query(sql_monster, (err, result)=>{
                            if(err){
                                console.log(err);
                            }else{
                                monster_result=result[0];
                                const sql_inventory=`select * from inventory where userid='${user_result.id}'`;
                                con.query(sql_monster, (err, result)=>{
                                    if(err){
                                        console.log(err);
                                    }else{
                                        inventory_result=result;
                                        res.render('index',{name, user_result, item_result, monster_result, inventory_result});
                                    }
                                });
                            }
                        });
                    }
                });
            }
        });
    }else{
        res.render('index',{user_result});            
    }

});

module.exports=router;    