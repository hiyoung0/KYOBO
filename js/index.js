$(document).ready(function(){
    //bg_wellcome_1
    $(".category1").hover(function(){
        $(".mainEvent1").show();
        $(".mainEvent2").hide();
        $(".bg_wellcome_1").css("background-color","rgb(230, 233, 246)");
        $(".category1").addClass("typeclass");
        $(".category2").removeClass("typeclass");
    });
    $(".category2").hover(function(){
        $(".mainEvent1").hide();
        $(".mainEvent2").show();
        $(".bg_wellcome_1").css("background-color","rgb(161, 221, 192)");
        $(".category2").addClass("typeclass");
        $(".category1").removeClass("category1");
    });


    //bg_wellcome_8
    $(".rising_list").hover(function(){
        $(".rising_btn_prev").css("display","block");
        $(".rising_btn_next").css("display","block");
    }, function(){
        $(".rising_btn_prev").css("display","none");
        $(".rising_btn_next").css("display","none");
    });

    $(".rising_btn_prev").hover(function(){
        $(".rising_btn_prev").css("display","block");
        $(".rising_btn_next").css("display","block");
    },function(){
        $(".rising_btn_prev").css("display","none");
        $(".rising_btn_next").css("display","none");
    });
    $(".rising_btn_next").hover(function(){
        $(".rising_btn_prev").css("display","block");
        $(".rising_btn_next").css("display","block");
    }, function(){
        $(".rising_btn_prev").css("display","none");
        $(".rising_btn_next").css("display","none");
    });

    //
});