// // 分类页标签页检测
// tagsBarActive()
// categoriesBarActive()
// topCategoriesBarScroll()

// //标签条
// function tagsBarActive(){
//     var urlinfo = window.location.pathname;
//     urlinfo = decodeURIComponent(urlinfo)
//     // console.log(urlinfo);
//     //判断是否是首页
//     if (urlinfo == '/'){
//       if (document.querySelector('#tags-bar')){
//         document.getElementById('首页').classList.add("select")
//       }
//     }else {
//       // 验证是否是分类链接
//       var pattern = /\/tags\/.*?\//;
//       var patbool = pattern.test(urlinfo);
//       // console.log(patbool);
//       // 获取当前的标签
//       if (patbool) {
//         var valuegroup = urlinfo.split("/");
//         //console.log(valuegroup[2]);
//         // 获取当前分类
//         var nowTag = valuegroup[2];
//         if (document.querySelector('#category-bar')){
//           document.getElementById(nowTag).classList.add("select");
//         }
//       }
//     } 
//   }
// //分类条
// function categoriesBarActive(){
//   var urlinfo = window.location.pathname;
//   urlinfo = decodeURIComponent(urlinfo)
//   //判断是否是首页
//   if (urlinfo == '/'){
//     if (document.querySelector('#category-bar')){
//       document.getElementById('首页').classList.add("select")
//     }
//   }else {
//     // 验证是否是分类链接
//     var pattern = /\/categories\/.*?\//;
//     var patbool = pattern.test(urlinfo);
//     // 获取当前的分类
//     if (patbool) {
//       var valuegroup = urlinfo.split("/");
//       // 获取当前分类
//       var nowCategorie = valuegroup[2];
//       if (document.querySelector('#category-bar')){
//         document.getElementById(nowCategorie).classList.add("select");
//       }
//     }
//   }
  
// }

// //鼠标控制横向滚动
// function topCategoriesBarScroll(){
//   if (document.getElementById("category-bar-items")){
//     let xscroll = document.getElementById("category-bar-items");
//   xscroll.addEventListener("mousewheel", function (e) {
//     //计算鼠标滚轮滚动的距离
//     let v = -e.wheelDelta / 2;
//     xscroll.scrollLeft += v;
//     //阻止浏览器默认方法
//     e.preventDefault();
// }, false);
//   }
// }
function catalogActive () {
  let $list = document.getElementById('catalog-list')
  if ($list) {
    // 鼠标滚轮滚动
    $list.addEventListener('mousewheel', function (e) {
      // 计算鼠标滚轮滚动的距离
      $list.scrollLeft -= e.wheelDelta / 2
      // 阻止浏览器默认方法
      e.preventDefault()
    }, false)

    // 高亮当前页面对应的分类或标签
    let $catalog = document.getElementById(decodeURIComponent(window.location.pathname))
    // $catalog.classList.add('selected')

    // 滚动当前页面对应的分类或标签到中部
    $list.scrollLeft = ($catalog.offsetLeft - $list.offsetLeft) - ($list.offsetWidth - $catalog.offsetWidth) / 2
  }
}


catalogActive ()