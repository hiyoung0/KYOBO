$(document).ready(function(){
    //header&nav 
    $(".close_img").click(function(){
        $(".advertisement").hide();
    });




    //bg_wellcome_1
    $(".category1").hover(function(){
        $(".mainEvent1").show();
        $(".mainEvent2").hide();
        $(".mainEvent3").hide();
        $(".mainEvent4").hide();
        $(".mainEvent5").hide();
        $(".mainEvent6").hide();
        $(".mainEvent7").hide();
        $(".bg_wellcome_1").css("background-color","rgb(230, 233, 246)");
        $(".category1").addClass("typeclass");
        $(".category2").removeClass("typeclass");
        $(".category3").removeClass("typeclass");
        $(".category4").removeClass("typeclass");
        $(".category5").removeClass("typeclass");
        $(".category6").removeClass("typeclass");
        $(".category7").removeClass("typeclass");
    });
    $(".category2").hover(function(){
        $(".mainEvent1").hide();
        $(".mainEvent2").show();
        $(".mainEvent3").hide();
        $(".mainEvent4").hide();
        $(".mainEvent5").hide();
        $(".mainEvent6").hide();
        $(".mainEvent7").hide();
        $(".bg_wellcome_1").css("background-color","rgb(161, 221, 192)");
        $(".category1").removeClass("typeclass");
        $(".category2").addClass("typeclass");
        $(".category3").removeClass("typeclass");
        $(".category4").removeClass("typeclass");
        $(".category5").removeClass("typeclass");
        $(".category6").removeClass("typeclass");
        $(".category7").removeClass("typeclass");
    });
    $(".category3").hover(function(){
        $(".mainEvent1").hide();
        $(".mainEvent2").hide();
        $(".mainEvent3").show();
        $(".mainEvent4").hide();
        $(".mainEvent5").hide();
        $(".mainEvent6").hide();
        $(".mainEvent7").hide();
        $(".bg_wellcome_1").css("background-color","rgb(226, 242, 211");
        $(".category1").removeClass("typeclass");
        $(".category2").removeClass("typeclass");
        $(".category3").addClass("typeclass");
        $(".category4").removeClass("typeclass");
        $(".category5").removeClass("typeclass");
        $(".category6").removeClass("typeclass");
        $(".category7").removeClass("typeclass");
    });
    $(".category4").hover(function(){
        $(".mainEvent1").hide();
        $(".mainEvent2").hide();
        $(".mainEvent3").hide();
        $(".mainEvent4").show();
        $(".mainEvent5").hide();
        $(".mainEvent6").hide();
        $(".mainEvent7").hide();
        $(".bg_wellcome_1").css("background-color","rgb(218, 236, 240)");
        $(".category1").removeClass("typeclass");
        $(".category2").removeClass("typeclass");
        $(".category3").removeClass("typeclass");
        $(".category4").addClass("typeclass");
        $(".category5").removeClass("typeclass");
        $(".category6").removeClass("typeclass");
        $(".category7").removeClass("typeclass");
    });
    $(".category5").hover(function(){
        $(".mainEvent1").hide();
        $(".mainEvent2").hide();
        $(".mainEvent3").hide();
        $(".mainEvent4").hide();
        $(".mainEvent5").show();
        $(".mainEvent6").hide();
        $(".mainEvent7").hide();
        $(".bg_wellcome_1").css("background-color","rgb(248, 244, 216)");
        $(".category1").removeClass("typeclass");
        $(".category2").removeClass("typeclass");
        $(".category3").removeClass("typeclass");
        $(".category4").removeClass("typeclass");
        $(".category5").addClass("typeclass");
        $(".category6").removeClass("typeclass");
        $(".category7").removeClass("typeclass");
    });
    $(".category6").hover(function(){
        $(".mainEvent1").hide();
        $(".mainEvent2").hide();
        $(".mainEvent3").hide();
        $(".mainEvent4").hide();
        $(".mainEvent5").hide();
        $(".mainEvent6").show();
        $(".mainEvent7").hide();
        $(".bg_wellcome_1").css("background-color","rgb(222, 243, 228)");
        $(".category1").removeClass("typeclass");
        $(".category2").removeClass("typeclass");
        $(".category3").removeClass("typeclass");
        $(".category4").removeClass("typeclass");
        $(".category5").removeClass("typeclass");
        $(".category6").addClass("typeclass");
        $(".category7").removeClass("typeclass");
    });
    $(".category7").hover(function(){
        $(".mainEvent1").hide();
        $(".mainEvent2").hide();
        $(".mainEvent3").hide();
        $(".mainEvent4").hide();
        $(".mainEvent5").hide();
        $(".mainEvent6").hide();
        $(".mainEvent7").show();
        $(".bg_wellcome_1").css("background-color","rgb(251, 234, 239)");
        $(".category1").removeClass("typeclass");
        $(".category2").removeClass("typeclass");
        $(".category3").removeClass("typeclass");
        $(".category4").removeClass("typeclass");
        $(".category5").removeClass("typeclass");
        $(".category6").removeClass("typeclass");
        $(".category7").addClass("typeclass");
    });




    // bg_wellcome_5
    $(".domestic").hover(function(){
        $(".new_book_kblist1").show();
        $(".new_book_kblist2").hide();
        $(".new_book_kblist3").hide();
        $(".new_book_kblist4").hide();
        $(".new_book_kblist5").hide();
        $(".domestic").addClass("mini_back");
        $(".oversea").removeClass("mini_back");
        $(".kb_ebooK").removeClass("mini_back");
        $(".kb_sam").removeClass("mini_back");
        $(".kb_album").removeClass("mini_back");
    });
    $(".oversea").hover(function(){
        $(".new_book_kblist1").hide();
        $(".new_book_kblist2").css("display","flex");
        $(".new_book_kblist3").hide();
        $(".new_book_kblist4").hide();
        $(".new_book_kblist5").hide();
        $(".domestic").removeClass("mini_back");
        $(".oversea").addClass("mini_back");
        $(".kb_ebooK").removeClass("mini_back");
        $(".kb_sam").removeClass("mini_back");
        $(".kb_album").removeClass("mini_back");
    });
    $(".kb_ebooK").hover(function(){
        $(".new_book_kblist1").hide();
        $(".new_book_kblist2").hide();
        $(".new_book_kblist3").css("display","flex");
        $(".new_book_kblist4").hide();
        $(".new_book_kblist5").hide();
        $(".domestic").removeClass("mini_back");
        $(".oversea").removeClass("mini_back");
        $(".kb_ebooK").addClass("mini_back");
        $(".kb_sam").removeClass("mini_back");
        $(".kb_album").removeClass("mini_back");
    });
    $(".kb_sam").hover(function(){
        $(".new_book_kblist1").hide();
        $(".new_book_kblist2").hide();
        $(".new_book_kblist3").hide();
        $(".new_book_kblist4").css("display","flex");
        $(".new_book_kblist5").hide();
        $(".domestic").removeClass("mini_back");
        $(".oversea").removeClass("mini_back");
        $(".kb_ebooK").removeClass("mini_back");
        $(".kb_sam").addClass("mini_back");
        $(".kb_album").removeClass("mini_back");
    });
    $(".kb_album").hover(function(){
        $(".new_book_kblist1").hide();
        $(".new_book_kblist2").hide();
        $(".new_book_kblist3").hide();
        $(".new_book_kblist4").hide();
        $(".new_book_kblist5").css("display","flex");
        $(".domestic").removeClass("mini_back");
        $(".oversea").removeClass("mini_back");
        $(".kb_ebooK").removeClass("mini_back");
        $(".kb_sam").removeClass("mini_back");
        $(".kb_album").addClass("mini_back");
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