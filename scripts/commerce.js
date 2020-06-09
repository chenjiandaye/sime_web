$(function () {
    $(".tab-btn").on("click", "li", function () {
        var index = $(this).index()
        $(this).addClass('on').siblings().removeClass('on')
        $(".tab-items .tab-item").eq(index).addClass('active').siblings().removeClass('active')
    })
})