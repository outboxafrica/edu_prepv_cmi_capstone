//Declaring variables and assigning them to their id names
const avenger = document.getElementById("avenger")
const shot = document.getElementById("shot")
const extract = document.getElementById("extract")
const fastt = document.getElementById("fastt")
const term = document.getElementById("term")

//Using button element to access their respective id names
const button1 = document.getElementById("note")
const button2 = document.getElementById("fate")
const button3 = document.getElementById("rico")
const button4 = document.getElementById("nani")
const button5 = document.getElementById("gar")

//Adding eventlistener to button1 element
button1.addEventListener("click", function () {
    button1.textContent = 'Added DeathNote';
    
    avenger.innerText = 'DeathNote'
});
//Adding eventlistener to button2 element
button2.addEventListener("click", function () {
button2.textContent = 'Added Fate Zero';

shot.innerText = 'Fate Zero'
});
//Adding eventlistener to button3 element
button3.addEventListener("click", function () {
button3.textContent = 'Added SAO';

extract.innerText = 'Sword Art Online'

});

//Adding eventlistener to button4 element
button4.addEventListener("click", function () {
    button4.textContent = 'Added Naruto';

    fastt.innerText = 'Naruto'
    });
//Adding eventlistener to button5 element
    button5.addEventListener("click", function () {
        button5.textContent = 'Added Garo';
        term.innerText = 'Garo'
        });


         //Search bar implementation
  const movies = [
    { name: 'deathnote'},
    { name: 'fate zero'},
    { name: 'sword art online'},
    { name: 'naruto'},
    { name: 'garo'}
    ];
    
    const list = document.getElementById('list')
    
    function setList(group) {
    clearList();
    for (const person of group) {
        const item = document.createElement('li');
        item.classList.add('list-group-item');
        const text = document.createTextNode(person.name);
        item.appendChild(text);
        list.appendChild(item);
    }
    if (group.length === 0) {
        setNoResults();
    }
    }
    
    
    function clearList() {
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
    }
    
    
    function setNoResults() {
            const item = document.createElement('li');
            item.classList.add('list-group-item');
            const text = document.createTextNode('No Results found');
            item.appendChild(text);
            list.appendChild(item);
        }
    
    function getRelevancy(value, searchTerm){
    if (value === searchTerm) {
        return 2;
    } else if (value.startsWith(term)) {
        return 1;
    } else if (value.includes(searchTerm)) {
        return 0;
    } else {
        return -1;
    }
    }
    
    
        const searchInput = document.getElementById('search');
        searchInput.addEventListener('input', (event) => {
    let value = event.target.value;
    if (value && value.trim().length > 0) {
       value = value.trim().toLowerCase();
     setList(movies.filter(person => {
         return person.name.includes(value);
     }).sort((personA, personB) => {
         return getRelevancy(personB.name, value)- getRelevancy(personA.name, value);
     
     }));
    } else {
        clearList();
    }
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
     
 
