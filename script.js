var min=0;
var sec=0;
var count=0;

var timer=false;

function stopWatch(){
    if(timer){
        count++;

        if(count==100){
            sec++;
            count=0;
        }
        if(sec==60){
            min++;
            sec=0;
        }
        document.getElementById("min").innerHTML=min;
        document.getElementById("sec").innerHTML=sec;
        document.getElementById("count").innerHTML=count;
        setTimeout("stopWatch()",10);
    }
}

function start(){
    timer=true;
    stopWatch();
}

function stop(){
    timer=false;
}

function reset(){
    timer=false;
    min=0;
    sec=0;
    count=0;
    document.getElementById("min").innerHTML="00";
    document.getElementById("sec").innerHTML="00";
    document.getElementById("count").innerHTML="00";
}