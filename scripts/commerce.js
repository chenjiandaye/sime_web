$(function () {
    var mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        pagination: '.swiper-pagination',
        paginationType: 'bullets',
        paginationClickable: true
    })
    $(".tab-btn").on("click", "li", function () {
        var index = $(this).index()
        $(this).addClass('on').siblings().removeClass('on')
        $(".tab-items .tab-item").eq(index).addClass('active').siblings().removeClass('active')
    })

    $(".b-btn1").on('click', function () {
        $('body').css('height', '100%').css('overflow', 'hidden')
        $('#smds').prop('checked', true)
        $('.pop-up').show()
    })
    $(".pop-top").on('click', '.closeBtb', function () {
        $('body').css('height', 'auto').css('overflow', 'auto')
        $('.rel').children('input').prop('checked', false)
        $('.pop-up').hide()
    })
})