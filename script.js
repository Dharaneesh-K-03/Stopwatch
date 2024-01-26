var element=document.getElementById("themechanger");
var body=document.getElementById("bodyy");
var value=true;
var box=document.getElementById("box");
var icon=document.getElementById("play");
var isplaying=false;
var lapboxtheme=document.getElementById("lappbox");
let [seconds,minutes,hours]=[0,0,0];
let displaytime = document.querySelector(".displaytime");
let timer=null;
var lapTimes = [];
var lapbox = document.getElementById("lappbox");
function changer()
{
    if(value==true)
    {
        element.style.backgroundColor="#ffff";
        element.style.color="#6A6C6E";
        body.style.backgroundColor="#6A6C6E";
        box.style.boxShadow="0px 13px 30px 2px hsl(0, 58%, 95%)"
        lapboxtheme.style.backgroundColor="#6A6C6E";
        lapboxtheme.style.color="#ffff";
        lapboxtheme.style.boxShadow="0px 13px 30px 2px hsl(0, 58%, 95%)"
        value=false;
    }
    else{
        element.style.backgroundColor="#6A6C6E";
        element.style.color="#ffff";
        
        lapboxtheme.style.backgroundColor="#ffff";
        lapboxtheme.style.color="#6A6C6E";
        lapboxtheme.style.boxShadow="0px 4px 10px 2px hsla(0, 5%, 13%, 0.2)"
        body.style.backgroundColor="#ffff";
        box.style.boxShadow="0px 4px 10px 2px hsla(0, 5%, 13%, 0.2)"
        value=true;
    }
}
function start()
{
    if(isplaying)
    {
        icon.classList.remove('fa-pause');
        icon.classList.add('fa-play');
        if(timer!=null)
        {
            clearInterval(timer);
        }  
    }
    else{
        icon.classList.remove('fa-play');
        icon.classList.add('fa-pause');
       
        timer=setInterval(stopwatch,1000);
    }
    isplaying=!isplaying;
}

function stopwatch()
{
    seconds++;
    if(seconds==60)
    {
        seconds=0;
        minutes++;
        if(minutes==60)
        {
            minutes=0;
            hours++;
        }
    }
    let h=hours<10?"0"+hours:hours;
    let m=minutes<10?"0"+minutes:minutes;
    let s=seconds<10?"0"+seconds:seconds;
    displaytime.innerHTML=h+":"+m+":"+s;
}
function stop()
{
    clearInterval(timer);
    [seconds,minutes,hours]=[0,0,0];
    displaytime.innerHTML="00:00:00";
    icon.classList.remove('fa-pause');
    icon.classList.add('fa-play');
    isplaying=!isplaying;
    // Clear lap times and lap box
    lapTimes = [];
    renderLapTimes();

}

function lap() {
    // Store the lap time
    lapTimes.push(displaytime.innerHTML);

    // Display lap times in the lapbox
    renderLapTimes();
}

function renderLapTimes() {
    lapbox.innerHTML = '<div class="lapl"> LAPS</div>';
    let startIndex = Math.max(0, lapTimes.length - 6);
    for (let i = startIndex; i < lapTimes.length; i++) {
        let lapElement = document.createElement("div");
        lapElement.innerText = lapTimes[i];
        lapbox.appendChild(lapElement);
    }
}