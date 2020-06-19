$(function () {
    var mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        pagination: '.swiper-pagination',
        paginationType: 'custom',
        // autoplay: 3000,
        // loop: true,
        paginationClickable: true,
        paginationCustomRender: function (swiper, current, total) {
            var customPaginationHtml = "";
            for (var i = 0; i < total; i++) {
                //判断哪个分页器此刻应该被激活
                if (i == (current - 1)) {
                    customPaginationHtml += '<span class="swiper-pagination-customs swiper-pagination-customs-active"></span>';
                } else {
                    customPaginationHtml += '<span class="swiper-pagination-customs"></span>';
                }
            }
            return customPaginationHtml;
        },
        prevButton: '.swiper-button-prev',
        nextButton: '.swiper-button-next',
    })

    function popChange(id) {
        $('body').css('height', '100%').css('overflow', 'hidden')
        $(id).prop('checked', true)
        $('.pop-up').show()
    }
    $('body').on('click', '.info-btn1,.i-btn1.ds', function () {
        popChange('#smds')
    })
    $('.i-btn1.jy').on('click', function () {
        popChange('#smjy')
    })
    $('.i-btn1.jd').on('click', function () {
        popChange('#smjd')
    })
    $('.i-btn1.ab').on('click', function () {
        popChange('#smab')
    })
    $(".pop-top").on('click', '.closeBtb', function () {
        $('body').css('height', 'auto').css('overflow', 'auto')
        $('.rel').children('input').prop('checked', false)
        $('.pop-up').hide()
    })

    function docWidthChange() {
        var docEl = document.documentElement
        var width = docEl.clientWidth
        if (width <= 1180) {
            $('.swiper-info .info-tit').css('margin-top', '0')
            return
        }
        //1920-1180=740   
        if (width > 1180 && width < 1920) {
            var w = 1920 - width
            var mar_t = 110 * ((740-w) / 740) + 'px'
            $('.swiper-info .info-tit').css('margin-top', mar_t)
            return
        }
        $('.swiper-info .info-tit').css('margin-top', '110px')
    }
    $(window).resize(function () {
        docWidthChange()
    })
    docWidthChange()
})