
var score = 0;
var timeLeft = 30;


var clickBtn = document.getElementById("clickBtn");
var scoreDisplay = document.getElementById("score");
var timerDisplay = document.getElementById("timer");

clickBtn.addEventListener("click", function() {
  score++;
  scoreDisplay.innerHTML = "Score: " + score;
});


var timerInterval = setInterval(function() {
  timeLeft--;
  timerDisplay.innerHTML = "Time Left: " + timeLeft;
  

  if (timeLeft == 0) {
    clearInterval(timerInterval);
    

    clickBtn.disabled = true;
    

    alert("Time's up! Your final score is " + score);
  }
  

  if (timeLeft == 15) {
    clickBtn.classList.add("moving");
  }
}, 1000);
