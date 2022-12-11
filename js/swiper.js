if (document.querySelector('#notice')) {
var swiper = new Swiper ('#noticeList', {
       spaceBetween: 30,
       centeredSlides: true,
       direction: 'vertical', // 垂直切换选项
       loop: true, // 循环模式选项

       autoplay: {
         delay: 3000,
         disableOnInteraction: false,
       }})
}
if(document.querySelector('#sticky')){
    var mySwiper = new Swiper('#stickyList', {
        initialSlide: 0,// 初始化滑块索引（1到6随机数）
        direction: 'horizontal',// 垂直切换选项
        speed: 500,             // 切换速度
        loop: true,             // 循环模式选项
        slidesPerView: 2,       // 显示2个滑块
        centeredSlides: true,   // 选中滑块居中
  
        effect : 'coverflow',
        slidesPerView: 2,
        coverflowEffect: {
          rotate: 0,           // 滑块做3d旋转时Y轴的旋转角度
          stretch: 0,          // 每个滑块之间的拉伸值，越大滑块靠得越紧
          depth: 0,            // 滑块的位置深度。值越大z轴距离越远，看起来越小
          modifier: 0,          // depth和rotate和stretch的倍率，值越大这三个参数的效果越明显
          slideShadows : false  // 是否开启slide阴影
        },
  
        loopAdditionalSlides: 0,
        loopPreventsSlide: false, // 滑块过渡时，允许切换过渡方向
        autoplay: true,           // 自动滑动
        autoplay: {
          disableOnInteraction: false,  // 滑块触碰后不会停止自动切换
          pauseOnMouseEnter: true,      // 鼠标置于swiper时暂停自动切换
        },
  
        mousewheel: true,       // 鼠标滚轮控制滑块切换
  
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
          clickable :true,          // 点击分页器的指示点分页器会控制滑块切换
          // 自定义分页器的指示点
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
          },
        },
      })
}
