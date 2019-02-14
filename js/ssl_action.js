(function(){
    var rightContainer = document.getElementsByClassName("right_container")[0];
    var ssChoose = document.getElementsByClassName("shishen_choose");
    var ssTypeList = rightContainer.getElementsByClassName("ss_type");
    // console.log(ssChoose.length);
    

    function bindEvent(ssChoose){

        for(var i=0;i<ssChoose.length;i++){
            ssChoose[i].index = i;
            ssChoose[i].onclick = changeTypeList;
        }
        return;
    }
    
    function changeTypeList(){
        for(var i=0;i<ssTypeList.length;i++){
            ssTypeList[i].classList.remove("on");
        }
        ssTypeList[this.index].classList.add("on");
        return;
    }

    bindEvent(ssChoose);

})();