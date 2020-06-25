// //initiate checkout
// function initiateCheckout() {
//     alert("Initiate Checkout");
//     // javascript for the function of the checkout seciton
//     var idNum = document.getElementById("number").value;
//     console.log("id " + idNum);

//     var names = document.getElementById('names').value;
//     console.log("names " + names);

//     const errorElement = document.getElementById('error');
//     console.log("error ");

//     alert("collected user data");
//     console.log("initiated the checkout");

//     let init = getInitiatedCountdown();


// }

// // display get's user email

// function getUserEmail() {


//     // get users email from where it is stored in signup JS
//     let email = "tony@gmail.com";
//     userEmail.innerText = "USER: " + getUserEmail();
//     console.log(email);

//     alert("Collected email");

//     return email;
// }

// function getInitiatedCountdown() {


// }


// // USER ACCOUNTS STORED BELOW--->
// // Declaring user objects: id email password
// // id    email    password     idNum      timer     idNames       
// var accounts = [
//     [2, "tony@gmail.com", "tony123", "CM10100007", 12, "ANTONY"],
//     [3, "alvin@gmail.com"],
//     [0, "", "", "", 0, ""],
//     [2, "tony@gmail.com", "tony123", "CM10100007", 12, "ANTONY"],
// ];
// // USER ACCOUNTS ABOVE--->



    //Start point
    var movies = 0;

    //Array of images
    var images = [];
    
    //Time in milliseconds btn each image switch
    var time = 1000;
    
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
    function changeImage(){
    document.slide.src = images[movies];
    
    if(movies < images.length - 1){
        //If its true increament by one
        movies++;
    } else{
        //If its false reset it to 0
        movies = 0;
    }
    setTimeout('changeImage()', time);
    }
    window.onload = changeImage;