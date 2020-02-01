$(document).ready(function(){

    $(document).on('click', '#login_btn', function(){
        
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