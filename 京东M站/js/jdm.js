
//建议  以模块的方式进行开发， 把某一功能放到一个方法中，方便以后调用




//搜索框透明度发生变化
//获取header元素
function search(){
    var search = document.getElementsByClassName("header")[0];
    //获取轮播图banner元素
    var banner = document.getElementsByClassName("swiper-container")[0];

    //获取banner的高度
    var height = banner.offsetHeight;

    window.onscroll = function(){
        //当滚动的高度大于banner卷去高度时颜色不变
        //首先获取banner滚动高度
        var top = document.documentElement.scrollTop;
        
        //之后做判断
        if (top>height){
            search.style.background = "rgba(201,21,35,1)";
        }else {
            var opacity = height/top * 0.3 ;
            search.style.background = 'rgba(201,21,35,'+opacity+')';
        }
    }
}
search();
  
//倒计时部分
function runTime(){
    var time = 11 * 60 * 60;//给一个目标时间18000秒
    var times = document.getElementsByClassName("runTime");
    var timer = setInterval(function(){
        
        time--;
        //把秒转换成时分秒
        var hours = Math.floor(time/(60*60));
        var mins = Math.floor(time/60%60);
        var seconds = time%60;

        //再把时分秒渲染到页面上
        times[0].innerHTML = hours >= 10? Math.floor(hours/10) :0;
        times[1].innerHTML = hours%10;
         
        times[2].innerHTML = mins >= 10? Math.floor(mins/10) :0;
        times[3].innerHTML = mins%10;

        times[4].innerHTML = seconds >= 10?Math.floor(seconds/10) :0;
        times[5].innerHTML = seconds%10;

        
    },1000)

}
runTime();

