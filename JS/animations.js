//Declaring variables and assigning them to their id names
const avenger = document.getElementById("avenger")
const shot = document.getElementById("shot")
const extract = document.getElementById("extract")
const fastt = document.getElementById("fastt")
const term = document.getElementById("term")

//Using button element to access their respective id names
const button1 = document.getElementById("spies")
const button2 = document.getElementById("zoo")
const button3 = document.getElementById("league")
const button4 = document.getElementById("freeze")
const button5 = document.getElementById("com")

//Adding eventlistener to button1 element
button1.addEventListener("click", function () {
    button1.textContent = 'Added Spies';
    
    avenger.innerText = 'Spies in Disguise'
});
//Adding eventlistener to button2 element
button2.addEventListener("click", function () {
button2.textContent = 'Added Zootopia';

shot.innerText = 'Zootopia'
});
//Adding eventlistener to button3 element
button3.addEventListener("click", function () {
button3.textContent = 'Added Justice League';

extract.innerText = 'Justice League'

});

//Adding eventlistener to button4 element
button4.addEventListener("click", function () {
    button4.textContent = 'Added Frozen';

    fastt.innerText = 'Frozen'
    });
//Adding eventlistener to button5 element
    button5.addEventListener("click", function () {
        button5.textContent = 'Added Coco';
        term.innerText = 'Coco'
        });


        //Opens a side menue to links
        function openSlideMenu() {
          document.getElementById('side-menu').style.width = '250px';
          document.getElementById('main').style.marginLeft = '250px';
        }
        function closeSlideMenu() {
          document.getElementById('side-menu').style.width = '0';
          document.getElementById('main').style.marginLeft = '0';
        }
     
 
