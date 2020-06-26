//Start point
var movies = 0;

//Array of images
var images = [];

//Time in milliseconds btn each image switch
var time = 2000;

//turns timer off
var timeOff = false;

//
var returnN = false;

//Image list
images[0] = '../images/24.jpg';
images[1] = '../images/avengers.jpg';
images[2] = '../images/blacklist.jpg';
images[3] = '../images/extraction.jpg';
images[4] = '../images/condor.jpg';
images[5] = '../images/bloodshot.jpg';
images[6] = '../images/fastandfurious.jpg';
images[7] = '../images/terminator.jpg';
images[8] = '../images/flash.jpg';
images[9] = '../images/frozen.jpg';
images[10] = '../images/spies.jpg';
images[11] = '../images/zootopia.jpg';
images[12] = '../images/coco.jpg';
images[13] = '../images/garo.jpg';
images[14] = '../images/naruto.jpg';
images[15] = '../images/jl.jpg';
images[16] = '../images/kirito.jpg';


//To change the image
function changeImage() {

    document.slide.src = images[movies];

    if (movies < images.length - 1) {
        //If its true increament by one
        movies++;
    } else {
        //If its false reset it to 0
        movies = 0;
    }
    setTimeout('changeImage()', time);
}
window.onload = changeImage;


const btn2 = document.getElementById('btn2');
btn2.addEventListener("click", returnNow);

function returnNow() {

    returnN = true;

}

const btn = document.getElementById('btn')

btn.addEventListener("click", startTimer)

function startTimer() {
    // Set the date we're counting down to
    var countDownDate = new Date().getTime();
    countDownDate += (1000 * 60 * 60 * 24) * 3;

    // Update the count down every 1 second
    var x = setInterval(function() {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        document.getElementById("timer").innerHTML = "You have " + days + "DAYS " + hours + "h " +
            minutes + "m " + seconds + "s <br> to return your movies!";

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("timer").innerHTML = "EXPIRED";
        }

        if (returnN === true) {
            document.getElementById("timer").innerHTML = "MOVIES HANDED IN, THANK YOU!";

        }
    }, 1000);
}