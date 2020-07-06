$(function () {
    function resizeFontSize() {
        //获取根元素
        const docEl = document.documentElement;
        //获取设备宽度
        const {
            clientWidth
        } = docEl;
        //若未获取到设备宽度，则终止函数执行
        if (!clientWidth) return;
        //计算rem基础配置：设计图以750px为准时，px rem比例为1：100
        const fs = 100 * (clientWidth / 750);
        //为根元素字体赋值
        docEl.style.fontSize = `${fs}px`;
    }
    //动态加载一个js/css文件

    function loadjscssfile(filename, filetype) {
        if (filetype == "js") {
            var fileref = document.createElement('script')
            fileref.setAttribute("type", "text/javascript")
            fileref.setAttribute("src", filename)
        } else if (filetype == "css") {
            var fileref = document.createElement("link")
            fileref.setAttribute("rel", "stylesheet")
            fileref.setAttribute("type", "text/css")
            fileref.setAttribute("href", filename)
        }
        if (typeof fileref != "undefined") {
            document.getElementsByTagName("head")[0].appendChild(fileref)
        }
    }

    function removejscssfile(filename, filetype) {
        var targetelement = (filetype == "js") ? "script" : (filetype == "css") ? "link" : "none"
        var targetattr = (filetype == "js") ? "src" : (filetype == "css") ? "href" : "none"
        var allsuspects = document.getElementsByTagName(targetelement)
        for (var i = allsuspects.length; i >= 0; i--) {
            if (allsuspects[i] && allsuspects[i].getAttribute(targetattr) != null && allsuspects[i].getAttribute(
                    targetattr).indexOf(filename) != -1)
                allsuspects[i].parentNode.removeChild(allsuspects[i])
        }
    }
    if ((navigator.userAgent.match(
            /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
            ))) { //手机
        resizeFontSize()
        $('body').addClass('mo')
        loadjscssfile('./styles/m_index.min.css', 'css')
    } else { //电脑
        $('body').removeClass('mo')
        removejscssfile('./styles/m_index.min.css', 'css')
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
    }

    
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
                    customPaginationHtml +=
                        '<span class="swiper-pagination-customs swiper-pagination-customs-active"></span>';
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

    

    var btnTop = $('.btnTop')

    window.onscroll = function () {
        scrollChange()
    }

    function scrollChange() {
        var backTop = $(window).scrollTop();
        if (backTop >= 750) { //当前视口顶端大于等于20时，显示返回顶部的按钮
            btnTop.fadeIn();
        } else {
            btnTop.fadeOut()
        }

    }
    scrollChange()

    btnTop.on('click', function () {
        $("html,body").animate({
            scrollTop: 0
        }, 100);
        return false
    })

})