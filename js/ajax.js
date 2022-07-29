//.tap_wellcome_kyobo
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "실험경제반" },
    headers: { Authorization: "KakaoAK 9a32b66e83b5960bf00283d931393441" }
})
    .done(function (msg) {

        $(".book_1").append("<a href='#'>" + "<img src='" + msg.documents[1].thumbnail + "'/>" + "</a>");
        $(".ajax_title").append(msg.documents[1].title);
        $(".cn_author").append(msg.documents[1].authors[0]);
        $(".cn_publisher").append(msg.documents[1].publisher);

    });



$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "여름과 루비" },
    headers: { Authorization: "KakaoAK 9a32b66e83b5960bf00283d931393441" }
})
    .done(function (msg) {

        $(".book_2").append("<a href='#'>" + "<img src='" + msg.documents[0].thumbnail + "'/>" + "</a>");

    });



$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "나를 살게 하는 것들" },
    headers: { Authorization: "KakaoAK 9a32b66e83b5960bf00283d931393441" }
})
    .done(function (msg) {

        $(".book_3").append("<a href='#'>" + "<img src='" + msg.documents[0].thumbnail + "'/>" + "</a>");
    });




//.new_book_kblist1
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "비올레트" },
    headers: { Authorization: "KakaoAK 9a32b66e83b5960bf00283d931393441" }
})
    .done(function (msg) {

        $(".new_book_box1").append("<img src='" + msg.documents[0].thumbnail + "'/>");
        $(".kblist_title1").append(msg.documents[0].title);

    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "조우성 변호사" },
    headers: { Authorization: "KakaoAK 9a32b66e83b5960bf00283d931393441" }
})
    .done(function (msg) {

        $(".new_book_box2").append("<img src='" + msg.documents[0].thumbnail + "'/>");
        $(".kblist_title2").append(msg.documents[0].title);

    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "우는 법을" },
    headers: { Authorization: "KakaoAK 9a32b66e83b5960bf00283d931393441" }
})
    .done(function (msg) {

        $(".new_book_box3").append("<img src='" + msg.documents[0].thumbnail + "'/>");
        $(".kblist_title3").append(msg.documents[0].title);

    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "지배한 단어들" },
    headers: { Authorization: "KakaoAK 9a32b66e83b5960bf00283d931393441" }
})
    .done(function (msg) {

        $(".new_book_box4").append("<img src='" + msg.documents[0].thumbnail + "'/>");
        $(".kblist_title4").append(msg.documents[0].title);

    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "Minor Feelings" },
    headers: { Authorization: "KakaoAK 9a32b66e83b5960bf00283d931393441" }
})
    .done(function (msg) {

        $(".new_book_box5").append("<img src='" + msg.documents[0].thumbnail + "'/>");
        $(".kblist_title5").append(msg.documents[0].title);

    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "Cursed Bunny" },
    headers: { Authorization: "KakaoAK 9a32b66e83b5960bf00283d931393441" }
})
    .done(function (msg) {

        $(".new_book_box6").append("<img src='" + msg.documents[0].thumbnail + "'/>");
        $(".kblist_title6").append(msg.documents[0].title);

    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "How to Prevent the Next" },
    headers: { Authorization: "KakaoAK 9a32b66e83b5960bf00283d931393441" }
})
    .done(function (msg) {

        $(".new_book_box7").append("<img src='" + msg.documents[1].thumbnail + "'/>");
        $(".kblist_title7").append(msg.documents[1].title);

    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "글로우" },
    headers: { Authorization: "KakaoAK 9a32b66e83b5960bf00283d931393441" }
})
    .done(function (msg) {

        $(".new_book_box8").append("<img src='" + msg.documents[5].thumbnail + "'/>");
        $(".kblist_title8").append(msg.documents[1].title);

    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "그깟 떡볶이" },
    headers: { Authorization: "KakaoAK 9a32b66e83b5960bf00283d931393441" }
})
    .done(function (msg) {

        $(".new_book_box9").append("<img src='" + msg.documents[0].thumbnail + "'/>");
        $(".kblist_title9").append(msg.documents[0].title);

    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "열두 달 향신료 카레" },
    headers: { Authorization: "KakaoAK 9a32b66e83b5960bf00283d931393441" }
})
    .done(function (msg) {

        $(".new_book_box10").append("<img src='" + msg.documents[0].thumbnail + "'/>");
        $(".kblist_title10").append(msg.documents[0].title);

    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "여기는 커스터드" },
    headers: { Authorization: "KakaoAK 9a32b66e83b5960bf00283d931393441" }
})
    .done(function (msg) {

        $(".new_book_box11").append("<img src='" + msg.documents[0].thumbnail + "'/>");
        $(".kblist_title11").append(msg.documents[0].title);

    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "틸" },
    headers: { Authorization: "KakaoAK 9a32b66e83b5960bf00283d931393441" }
})
    .done(function (msg) {

        $(".new_book_box12").append("<img src='" + msg.documents[0].thumbnail + "'/>");
        $(".kblist_title12").append(msg.documents[0].title);

    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "월 10만원 그림 투자 재테크" },
    headers: { Authorization: "KakaoAK 9a32b66e83b5960bf00283d931393441" }
})
    .done(function (msg) {

        $(".new_book_box13").append("<img src='" + msg.documents[0].thumbnail + "'/>");
        $(".kblist_title13").append(msg.documents[0].title);

    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "식량위기" },
    headers: { Authorization: "KakaoAK 9a32b66e83b5960bf00283d931393441" }
})
    .done(function (msg) {

        $(".new_book_box14").append("<img src='" + msg.documents[0].thumbnail + "'/>");
        $(".kblist_title14").append(msg.documents[0].title);

    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "보이지 않는 곳에서" },
    headers: { Authorization: "KakaoAK 9a32b66e83b5960bf00283d931393441" }
})
    .done(function (msg) {

        $(".new_book_box15").append("<img src='" + msg.documents[0].thumbnail + "'/>");
        $(".kblist_title15").append(msg.documents[0].title);

    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "하쿠다 사진관" },
    headers: { Authorization: "KakaoAK 9a32b66e83b5960bf00283d931393441" }
})
    .done(function (msg) {

        $(".new_book_box16").append("<img src='" + msg.documents[0].thumbnail + "'/>");
        $(".kblist_title16").append(msg.documents[0].title);

    });

    


 //.sample_kyobo
 $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "헤어질 결심" },
    headers: { Authorization: "KakaoAK 9a32b66e83b5960bf00283d931393441" }
})
    .done(function (msg) {

        $(".sample_box1").append("<img src='" + msg.documents[0].thumbnail + "'/>");
        $(".splist_title1").append(msg.documents[0].title);

    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "역행자" },
    headers: { Authorization: "KakaoAK 9a32b66e83b5960bf00283d931393441" }
})
    .done(function (msg) {

        $(".sample_box2").append("<img src='" + msg.documents[0].thumbnail + "'/>");
        $(".splist_title2").append(msg.documents[0].title);

    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "불편한 편의점" },
    headers: { Authorization: "KakaoAK 9a32b66e83b5960bf00283d931393441" }
})
    .done(function (msg) {

        $(".sample_box3").append("<img src='" + msg.documents[0].thumbnail + "'/>");
        $(".splist_title3").append(msg.documents[0].title);

    });




// box_detail_point
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "튜브" },
    headers: { Authorization: "KakaoAK 9a32b66e83b5960bf00283d931393441" }
})
    .done(function (msg) {

        $(".ajax_cover").append("<img src='" + msg.documents[0].thumbnail + "'/>");
        $(".ajax_title_box").append(msg.documents[0].title);
        $(".ajax_author").append(msg.documents[0].authors[0]);
        $(".ajax_publisher").append("<a href='#'>"+msg.documents[0].publisher+"</a>");
        $(".ajax_price").append(msg.documents[0].price);
        $(".ajax_sale_price").append(msg.documents[0].sale_price);

    });
