$(document).ready(function(){
    $(".scoreContainer").hide();
    $(".resultScore").hide();
    $(".stopContainer").hide();
    $(".seconds").hide();

    let timerStarted = false;
    let countdownTimer; // Declare the countdownTimer globally

    $("#myImg").click(function(){
        $("#myImg").fadeOut();
        $("h1").fadeOut(0);
        $("#myImg").fadeIn(500);
        $("#myImg").animate({
            height: '140px'
        });
        $(".scoreContainer").fadeIn(2000);
        $(".scoreContainer").show();
        $(".stopContainer").show();
        $(".seconds").show();
        addScore();
        
        if (!timerStarted) {
            showSeconds();
            timerStarted = true;
        }
    });

    $("#stopGame").click(function(){
        $("#myImg").hide();
        $("h1").hide();
        $(".scoreContainer").hide();
        $(".resultScore").show();
        $(".stopContainer").hide();
        $(".seconds").hide(); 
        clearInterval(countdownTimer);
        timerStarted = false; // Ensure timerStarted is reset
    });
});

let currentScore = -1; 

function addScore() {
    currentScore++;
    document.getElementById('currentScore').innerHTML = currentScore;
    document.getElementById('result').innerHTML = currentScore;
    document.getElementById('myImg').style.position="absolute";
    intervalPaused = false;
    displayImage();
}

function displayImage() {
    if (!intervalPaused) {
        var img = document.getElementById('myImg');
        var imgWidth = img.offsetWidth;
        var imgHeight = img.offsetHeight;

        var maxWidth = window.innerWidth - imgWidth; 
        var maxHeight = window.innerHeight - imgHeight; 

        let l = Math.floor(Math.random() * maxWidth); 
        let t = Math.floor(Math.random() * maxHeight); 

        img.style.top = t + "px";
        img.style.left = l + "px";
    }
}

// Show seconds in display  
function showSeconds(){
    var timeLeft = 60; 
    const countdownElement = document.getElementById("countdown");
    
    countdownElement.textContent = timeLeft; // Reset the timer display

    countdownTimer = setInterval(() => {
        timeLeft--;
        countdownElement.textContent = timeLeft;
    
        if (timeLeft <= 0) {
            clearInterval(countdownTimer);
            $("#myImg").hide();
            $(".scoreContainer").hide();
            $("h1").hide();
            $(".resultScore").show();
            $(".stopContainer").hide();
            $(".seconds").hide(); // Hide the seconds display when time runs out
        }
    }, 1000);
}
