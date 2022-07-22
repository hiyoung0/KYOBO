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

