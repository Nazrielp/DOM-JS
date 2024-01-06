//doocument.getElementById() -> element
const judul = document.getElementById('judul') ;
judul.style.color = 'White';
judul.style.backgroundColor = '#ccc';
//untuk mengganti h1 tanpa mengubahnya di html
// judul.innerHTML = 'Zriel'


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
p1.innerHTML = 'Paragraf 1 js'
p1.style.fontSize = '30px'


