    var btnTop = $('.btnTop')
    var timer = null

    window.onscroll = function () {
        var backTop = getScrollTop();
        if (backTop >= 750) { //当前视口顶端大于等于20时，显示返回顶部的按钮
            btnTop.css('display','block')
        } else {
            btnTop.css('display','none')
        }
    }


    btnTop.on('click', function () {
        //定时执行
        timer = setInterval(function () {
            var backTop = getScrollTop()
            var speedTop = backTop / 10
            //修改当前视口的数值，产生向上活动的效果
            setScrollTop(backTop - speedTop)
            if (backTop == 0) {
                //结束函数执行
                clearInterval(timer)
            }
        }, 30)
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


    