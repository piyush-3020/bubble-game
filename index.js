var timer = 30;
var score = 0;
var ran = 0;

function increaseScore(){
    score += 10;
    document.querySelector("#scoreVal").textContent = score;
}

function getNewHit(){
    ran = Math.floor(Math.random()*10);
    document.querySelector("#hitVal").textContent = ran;
}

function makeBubble(){
    var clutter = "";
for(var i=1; i<=102; i++){
    var rn = Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${rn}</div>`;
}
document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer(){
   var timerInt = setInterval(function(){
        if(timer>0){
            timer--;
        document.querySelector("#timerValue").textContent = timer;
        }
        else{
            clearInterval(timerInt);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`;
        }
    },1000)
}

document.querySelector("#pbtm").addEventListener("click", function(dets){
    var clickedNum = Number(dets.target.textContent);
    if(clickedNum === ran){
        increaseScore();
        makeBubble();
        getNewHit();
    }
});

runTimer();
makeBubble();
getNewHit();