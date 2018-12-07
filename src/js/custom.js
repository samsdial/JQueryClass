$(".btn-js").on("click", function () {
    console.log("click");
});
$(".img-js").on("mouseenter", function () {
    //console.log("enter")
    $(this).addClass("img-thumbnail");
});
$(".img-js").on("mouseleave", function () {
    //console.log("leave")
    $(this).removeClass("img-thumbnail");
})
// Controles especiales para linjs
$(".btn-js").on("click", function (e) {
    e.preventDefault();
    var link = $(this).attr("href");
    console.log(link + ' Info Link')
});

$(document).ready(function(){
    console.log("PG lista");
});

