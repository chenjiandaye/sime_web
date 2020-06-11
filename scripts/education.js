$(function () {
    $(".tab-box-left").on("click", "li", function () {
        var index = $(this).index()
        $(this).addClass('on').siblings().removeClass('on')
        $(".right-detail").eq(index).addClass('active').siblings().removeClass('active')
    })
})