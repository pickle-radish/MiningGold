$(document).ready(function(){
    $(document).on('click', '#board_write_btn', function(){
       location.href="/board/write_form";
    });

    $(document).on('click', '#board_upload', function(){
        const title=$('#board_insert_title').val();
        const content=$('#board_insert_content').val();

        const send_param={title, content};

       $.post('/board/write', send_param,function(returnData){
           location.href="/board";
        });
    });

    $(document).on('click', '#board_write_cancel', function(){
       history.back();
    });
    
    $(document).on('click', '#click_title', function(){
        const id=5;
        location.href=`/board/content?id=${id}`;
    });
    
    $(document).on('click', '#btn_back', function(){
       history.back();
    });

    $(document).on('click', '#btn_delete', function(){
        const id=4;
        const send_param={id};
       $.post('/board/delete', send_param, function(returnData){
          alert(returnData.message);
          location.href="/board";
       });
    });
});

