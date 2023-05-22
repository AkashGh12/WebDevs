let [miliseconds, seconds, minutes, hours]=[0,0,0,0];
let timeref= document.querySelector(".timer-display");
let int=null;
document.getElementById("Start").addEventListener(
    "click",() => {
        if(int!=null){
            clearInterval(int);
        }
        int = setInterval(displayTimer,10);
    }    
);
document.getElementById("Pause").addEventListener("click",() => {
    clearInterval(int);
});
document.getElementById("Reset").addEventListener("click",() => {
    clearInterval(int);
    [miliseconds, seconds, minutes, hours]=[0,0,0,0];
    timeref.innerHTML=" 00 : 00 : 00 : 000 ";
});

function displayTimer(){
    miliseconds += 10;
    if(miliseconds==1000){
        miliseconds=0;
        seconds++;
        if (seconds==60){
            seconds=0;
            minutes++;
            if(minutes==60){
                minutes=0;
                hours++;    
            }
        }
    }

    let h=hours< 10 ? "0" + hours : hours;
    let m=minutes< 10 ? "0" + minutes : minutes;
    let s=seconds< 10 ? "0" + seconds : seconds;
    let ms= miliseconds < 10 ? "00" + miliseconds : miliseconds <100 ? "0" + miliseconds:miliseconds;

    timeref.innerHTML=`${h}:${m}:${s}:${ms}`;
}