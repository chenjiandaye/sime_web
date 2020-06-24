$(function () {
    var mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        pagination: '.swiper-pagination',
        paginationType: 'custom',
        autoplay: 3000,
        loop: true,
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
    $('body').on('click', '.info-btnbox.ds .info-btn1,.i-btn1.ds', function () {
        popChange('#smds')
    })
    $('body').on('click', '.info-btnbox.jy .info-btn1,.i-btn1.jy', function () {
        popChange('#smjy')
    })
    $('body').on('click', '.info-btnbox.jd .info-btn1,.i-btn1.jd', function () {
        popChange('#smjd')
    })
    $('body').on('click', '.info-btnbox.ab .info-btn1,.i-btn1.ab', function () {
        popChange('#smab')
    })
    $(".pop-top").on('click', '.closeBtb', function () {
        $('body').css('height', 'auto').css('overflow', 'auto')
        $('.rel').children('input').prop('checked', false)
        $('.pop-line input[type="text"]').val('')
        $('.pop-line textarea').val('')
        $('.pop-line input').removeClass('red')
        $('.pop-line textarea').removeClass('red')
        $('.pop-up').hide()
    })

    function docWidthChange() {
        var docEl = document.documentElement
        var width = docEl.clientWidth
        if (width <= 1180) {
            $('.swiper-info').css('padding-top', '0')
            return
        }
        //1920-1180=740   
        if (width > 1180 && width < 1920) {
            var w = 1920 - width
            var mar_t = 110 * ((740 - w) / 740) + 'px'
            $('.swiper-info').css('padding-top', mar_t)
            return
        }
        $('.swiper-info').css('padding-top', '110px')
    }
    $(window).resize(function () {
        docWidthChange()
    })
    docWidthChange()

    var btnTop = $('.btnTop')
    var timer = null

    window.onscroll = function () {
        scrollChange()
    }

    function scrollChange() {
        var backTop = getScrollTop();
        if (backTop >= 750) { //当前视口顶端大于等于20时，显示返回顶部的按钮
            btnTop.css('display', 'block')
        } else {
            btnTop.css('display', 'none')
        }

    }
    scrollChange()

    var f = 1
    var backTop = null
    btnTop.on('click', function () {
        //定时执行
        f === 1 && (backTop = getScrollTop() / 5)
        timer = setInterval(function () {
            f++
            var scrollTop = getScrollTop()
            var speedTop = scrollTop - backTop
            //修改当前视口的数值，产生向上活动的效果
            setScrollTop(speedTop)
            if (scrollTop == 0) {
                //结束函数执行
                clearInterval(timer)
            }
        }, 20)
    })
    //获取当前视口的顶端数值
    function getScrollTop() {
        var sTop;
        if (document.compatMode == "BackCompat") {
            sTop = document.body.scrollTop
        } else {
            //document.compatMode == \"CSS1Compat\"
            sTop = document.documentElement.scrollTop == 0 ? document.body.scrollTop : document.documentElement.scrollTop
        }
        return sTop
    }
    //设置当前视口的顶端数值
    function setScrollTop(top) {

        if (document.compatMode == "BackCompat") {
            document.body.scrollTop = top
        } else {
            if (document.documentElement.scrollTop == 0) {
                document.body.scrollTop = top
            } else {
                document.documentElement.scrollTop = top
            }
        }
    }

})