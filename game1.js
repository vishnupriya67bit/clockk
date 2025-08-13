function updateClock(){
    var date=new Date();
    var hours=date.getHours().toString().padStart(2,'0');
    var mins=date.getMinutes().toString().padStart(2,'0');
    var secs=date.getSeconds().toString().padStart(2,'0');
    document.getElementById('clock').innerHTML=hours+":"+mins+":"+secs;

    var tickSound = document.getElementById('tickSound');
    if (tickSound) {
        tickSound.currentTime = 0; // Rewind to start
        tickSound.play().catch(function (e) {
            console.log("Tick playback failed:", e);
        });
    }

    if (secs === "00") {
        var minuteSound = document.getElementById('minuteSound');
        if (minuteSound) {
            minuteSound.play().catch(function (e) {
                console.log("Audio playback failed:", e);
            });
        }
    }
}

window.setInterval(updateClock,1000);
updateClock();


var card=document.getElementById('card');
var message=document.getElementById('message');
var outSound = document.getElementById('outSound');
var clickSound = document.getElementById('clickSound');

card.addEventListener('mouseover',function(){
    card.style.backgroundColor="lightpink";
    message.innerHTML="You are IN !";
});

card.addEventListener('mouseout',function(){
    card.style.backgroundColor="lightgrey";
    message.innerHTML="You are OUT !";
    outSound.play();
});

card.addEventListener('click',function(){
    card.style.backgroundColor="lightblue";
    message.innerHTML="You Clicked !";
    clickSound.play();
});
