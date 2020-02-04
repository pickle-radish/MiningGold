function tab_click(isShop,tab){
    const send_param={isShop, category:tab};
    $.post('/tab', send_param, function(returnData){
        if(isShop){
            $('#shop_list').html(returnData);
        }else{
            $('#inven_list').html(returnData);
        }
    });
};

function set_gold(){
    $.post('/buy/set_gold', {}, function(returnData){
        $('#my_gold').html(returnData.gold);
    });
}

function buy(item_id){
    const price=$('#'+item_id+'_item_price').val();
    console.log(price);
    const send_param={item_id, price};
    $.post('/buy/item', send_param, function(returnData){
        $('#'+item_id).html("보유중");
        $('#'+item_id).attr("class", 'btn btn-basic');
        $('#inven_list').html(returnData);
        set_gold();
    });
}


$(document).ready(function(){

    $(document).on('click', '#monster_div', function(){
        
        $.post('/attack', {}, function(returnData){
            $('#monster_hp').html(returnData.hp);
        });
    });
    
    $(document).on('click', '#mining_div', function(){
        $.post('/mining', {}, function(returnData){
            $('#my_gold').html(returnData.gold);
        });
    });

    
    $(document).on('click', '#logout_btn', function(){
        $.post('/logout', {}, function(returnData){
            alert(returnData.message);
            location.reload();
        });
    });

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

    $(document).on('click', '#board_tab', function(){
       location.href="/board";
    });
});
   