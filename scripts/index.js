$(function () {
    $(".t_list").on('click', function () {
        console.log($(this))
        var _this = $(this)
        _this.addClass('active').siblings().removeClass('active')
    })

    var mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        pagination: '.swiper-pagination',
        paginationType: 'custom',
        autoplay: 3000,
        loop : true,
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
    // $(".swiper-pagination").on("click","span",function(e){
    //     var index = $(this).index()+1;
    //     mySwiper.slideTo(index);
    // })

})