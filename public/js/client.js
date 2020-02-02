function tab_click(isShop,tab){
    alert();
    const send_param={category:tab};
    $.post('/tab', send_param, function(returnData){
        $('#shop_list').html(returnData);
    }); 
};


$(document).ready(function(){
    $(document).on('click', '#logout_btn', function(){
        $.post('/logout', {}, function(returnData){
            alert(returnData.message);
            location.reload();
        });
    });

    // $(document).on('click', '#top_tab', function(){
    //     const send_param={category:"top"};
    //     $.post('/tab', send_param, function(returnData){
    //         $('#weapon_list').html(returnData);
    //     }); 
    // });


    $(document).on('click', '#login_btn', function(){
        const id=$("#userID").val();
        const pw=$("#userPW").val(); 
        const send_param={id, pw};
        $.post('/login', send_param, function(returnData){
            alert(returnData.message);
            location.reload();
        });
    });

    $(document).on('click', '#register_btn', function(){
        const id=$("#new_id").val();
        const pw=$("#new_pw").val();
        const name=$("#new_name").val();  

        const send_param={id, pw, name};
        $.post('/register', send_param, function(returnData){
            alert(returnData.message);
            $('#registermodal').modal("hide");

        });
    });

    $(document).on('click', '#main_tab', function(){
        $('#information_div').show();
        $('#market_div').hide();
        $('#inventory_div').hide();
    });
    $(document).on('click', '#market_tab', function(){
        $('#information_div').hide();
        $('#market_div').show();
        $('#inventory_div').hide();
        
    });
    $(document).on('click', '#inventory_tab', function(){
        $('#information_div').hide();
        $('#market_div').hide();
        $('#inventory_div').show();
    });
});
    $(document).on('click', '#board_tab', function(){
        $.post('/board',{}, function(returnData){
    });
});