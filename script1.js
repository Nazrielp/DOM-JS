//doocument.getElementById() -> element
const judul = document.getElementById('judul') ;
judul.style.backgroundColor = '#ccc';
//untuk mengganti h1 tanpa mengubahnya di html
// judul.innerHTML = 'Zriel';


//document.getElementsByTagName() -> HTMLCollection
const p = document.getElementsByTagName('p');
p[0].style.backgroundColor = 'lightblue';
p[1].style.backgroundColor = 'lightblue';
p[2].style.backgroundColor = 'lightblue';
p[3].style.backgroundColor = 'lightblue';


const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize = '50px';

// document.getElementsByClassName()  -> HTMLCollection
const p1 = document.getElementsByClassName('p1')[0];
p1.innerHTML = 'Paragraf 1 js';
p1.style.fontSize = '30px';

// menberikan style di Java script
// document.querySelector() -> Element
const p4 = document.querySelector('#b p');
p4.style.color = 'red';

const li2 = document.querySelector('section#b ul li:nth-child(2)');
li2.style.backgroundColor = 'orange';

// document.querySelectorAll() -> nodelist
const p2 = document.querySelectorAll('section#a p');
p2[2].style.color = 'yellow';
