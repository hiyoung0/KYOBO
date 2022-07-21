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

        // var str = msg.documents[0].contents;
        // var str2 = str.substring(0, 60);

        // $(".box").append("<p>" + str2 + "</p>");

    });



$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "여름과 루비" },
    headers: { Authorization: "KakaoAK 9a32b66e83b5960bf00283d931393441" }
})
    .done(function (msg) {

        $(".book_2").append("<a href='#'>" + "<img src='" + msg.documents[0].thumbnail + "'/>" + "</a>");
        // $(".ajax_title").append(msg.documents[1].title);
        // $(".cn_author").append(msg.documents[1].authors[0]);
        // $(".cn_publisher").append(msg.documents[1].publisher);

    });



$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "나를 살게 하는 것들" },
    headers: { Authorization: "KakaoAK 9a32b66e83b5960bf00283d931393441" }
})
    .done(function (msg) {

        $(".book_3").append("<a href='#'>" + "<img src='" + msg.documents[0].thumbnail + "'/>" + "</a>");
        // $(".ajax_title").append(msg.documents[1].title);
        // $(".cn_author").append(msg.documents[1].authors[0]);
        // $(".cn_publisher").append(msg.documents[1].publisher);

    });