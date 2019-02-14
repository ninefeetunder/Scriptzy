(function(){

    window.onload = function(){


        var nav = document.getElementsByClassName("nav-wrap")[0];
        var nav_list = nav.getElementsByTagName("a");
        var subnav = document.getElementsByClassName("subnav-wrap")[0];
        var subnav_list = document.getElementsByClassName("subnav");
        // 一级导航栏绑定事件
        for(var i=0;i<nav_list.length;i++){
            nav_list[i].index = i;
            // console.log(i);
            nav_list[i].onmouseover = function(){
                subnav.style.display = "block";
                changeNav(this.index);
            };
            nav_list[i].onmouseout = function(){
                subnav.style.display = "none";
            };
        }
        
        // 二级导航栏框架绑定事件
        subnav.onmouseover = function(){
            this.style.display = "block";
        };
        subnav.onmouseout = function(){
            this.style.display = "none";
        };

        // 切换二级导航栏内容函数
        function changeNav(index){
            // console.log(index);
            if(index==6||index==7){
                subnav.style.display = "none";
                return;
            }
            // 判断官方渠道
            if(index==8){
                index-=2;
            }
            for(var i=0;i<subnav_list.length;i++){
                subnav_list[i].style.display = "none";
            }
            subnav_list[index].style.display = "block";
        }





        var news_list = document.getElementsByClassName("news-list")[0];
        var news_ul = news_list.getElementsByTagName("ul")[0];
        var li_list = news_list.getElementsByTagName("li");
        var li_sum = li_list.length;
        var slide_sum = li_sum/4;
        var slide_num = 0
        // console.log(news_ul);
        var timer;

        // 3秒自动切换函数
        function slideNews(){

            timer = setInterval(function(){
                if(slide_num < slide_sum){
                    news_ul.style.left = -slide_num * 1000 + "px";
                    slide_num++;
                }
                else{
                    slide_num = 0;
                }
            }, 3000);
        }
        // 自动执行
        slideNews();

        news_ul.onmouseover = function(){
            clearInterval(timer);
        };
        news_ul.onmouseout = function(){
            slideNews();
        };
    };
    


})();