document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed")
    let advWindow = $(".advertisement");
    let closeButton = $(".modal-action-button");
    let timer = $(".timer");
    console.log(timer);
    setTimeout(function() {
        advWindow.css("display", "block")
        startTimer();
    }, 5000);

    $(closeButton).on('click', function() { 
        advWindow.css("display", "none");
    });
    function startTimer() {
        let remainTime = 5; 
    
        let intervalId = setInterval(function() {
            timer.html("Ви зможете закрити це повідомлення через " + remainTime + " секунд.");

            if (remainTime <= 0) {
                clearInterval(intervalId);
                timer.css("display", "none");
                closeButton.css("display", "block");
            }
    
            remainTime--;
        }, 1000);
    } 
  });
  
  
  