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
    setTimeout(() => {
        $('body').addClass('mobody')
    }, 0)

    // loadjscssfile('/templets/1/default/sime/styles/m_com.min.css', 'css')
    loadjscssfile('./styles/m_edu.min.css', 'css')
} else { //电脑
    setTimeout(() => {
        $('body').removeClass('mobody')
    }, 0)
    // removejscssfile('/templets/1/default/sime/styles/m_com.min.css', 'css')
    removejscssfile('./styles/m_edu.min.css', 'css')
}