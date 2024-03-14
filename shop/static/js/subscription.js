let displayWindow = true;
let displayWindowStorage = localStorage.getItem("displayWindow");
if(undefined !== displayWindowStorage ) {
    console.log(`displayWindowStorage: ${displayWindowStorage}`);
    displayWindow = Boolean(displayWindowStorage);
}
console.log(displayWindowStorage)

document.addEventListener("DOMContentLoaded", function () {
    let modalWindow = $(".accept");
    let acceptButton = $(".acceptButton");
    let declineButton = $('.declineButton')
    console.log(`displayWindow: ${displayWindow}`);

    if(displayWindow === false) {
        console.log(displayWindow);
        setTimeout(function() {
            modalWindow.css("display", "block") ;
        }, 1);
    }
 

    $(acceptButton).on('click', function() {  
        clickedAccept()
        modalWindow.css("display", "none");
    });

    $(declineButton).on('click', function() {  
        modalWindow.css("display", "none");
    });
 
  });

function clickedAccept() {
    displayWindow = false;
    localStorage.setItem("displayWindow", "false");
}
