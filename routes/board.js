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
    res.render('write',{});
});

router.post('/write', (req,res)=>{   
    
    const sql=`insert into board(n_name,title,content)VALUES( ${con.escape(req.session.name)}, ${con.escape(req.body.title)}, ${con.escape(req.body.content)})`;
    con.query(sql,(err)=>{
        if(err){
            console.error(err);
            res.json({message:"글 등록을 할 수 없습니다"})  
        }else{
            console.log('board insert okay');
            res.json({message:"글 등록이 완료되었습니다"});
        }
    });
});

router.get('/content', (req,res)=>{  
    console.log(req.query.id);
    con.query(`select * from board where bo_no=${con.escape(req.query.id)}`, (err, result)=>{
        if(err) {
            console.log(err);
        }else{
            console.log(result);
            res.render('content',{result:result[0]});
        }
    });
});

router.post('/delete', (req,res)=>{

    con.query(`DELETE FROM board WHERE bo_no = ${req.body.id}`, (err)=>{
        if(err) {
            console.log(err);
        }else{
            res.json({message:"삭제되었습니다"});
        }
    });
});


module.exports=router;