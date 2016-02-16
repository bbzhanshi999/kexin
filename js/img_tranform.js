var flag= 0;


window.onload=function(){

    var slider = document.getElementById('slider');
    setInterval(turn(),6000);

    function turn(value){
        if(!value){
            if(flag<=3){
                flag = flag+1;
            }else{
                flag=0;
            }
        }else{
            flag=value;
        }
        slider.style.top =-300*flag;
    }

}




function change(l){
    var val =  l.val;
    val = parseInt(val);
    var liList =l.parentNode().childNodes;
    for(i=0;i<liList.length;i++){
        var li = liList[i];
        li.style.backgroundColor="white";
        li.style.cursor="pointer";
    }
    l.style.backgroundColor="grey";
    l.style.cursor="default";
    if(isNaN(val)){
        turn(val);
    }
}