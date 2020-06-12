$(function () {
    function loadInner() {
        var sId = window.location.hash
        if(!sId){
            window.location.hash = '#introduction'
            sId = '#introduction'
        }
        $(".list-box>li").siblings().children("a").removeClass('on')
        var navClassName = sId.replace('#','.')
        var secClassName = sId.replace('#','.') + '-box'
        $(navClassName).addClass('on')
        $(secClassName).show().siblings().hide()
        console.log(navClassName,secClassName)
    }

    function pageInit() {
        $('.pages').pagination({
            totalData: 100, // 数据总条数//（ 默认值： 0）
            showData: 5, // 每页展示条数//（ 默认值： 0）
            current: 1, //当前第几页//（ 默认值： 1）
            count: 2, // 当前页前后页数//（ 默认值： 3）
            coping: true, //是否开启首页尾页//（ 默认值： false）
            callback(api) {
                console.log(api.getCurrent())
            }
        })
    }
    window.addEventListener("hashchange", function () {
        loadInner()
    })

    
    loadInner()
    pageInit()
})