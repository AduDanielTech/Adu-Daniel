const navToggle =document.getElementById('nav-toggle')
const navOverlay =document.getElementById('nav-overlay')
function toggleNav() {
    navToggle.classList.toggle('active-nav')
    navOverlay.classList.toggle('show-nav-overlay')
}
navToggle.addEventListener('click', toggleNav)



const elements = document.querySelectorAll('.wow');


const wow = new WOW();


wow.init({
  boxClass: 'wow', 
  animateClass: 'animated', 
  offset: 0, 
  mobile: true, 
  live: true 
});

const date = document.getElementById('date')
const currentYear = new Date().getFullYear();
 date.innerText= currentYear

 document.addEventListener('mousemove', e=> {

  let bubles = document.createElement('bubles');
  let x = e.pageX;
  let y = e.pageY;
  bubles.style.left = x + "px";
  bubles.style.top = y + "px";
  let size = Math.random() * 100;
  bubles.style.width = 1 + size + "px";
  bubles.style.height = 1 + size + "px";
  
  document.body.appendChild(bubles);
  setTimeout(function() {
    bubles.remove();
  }, 1100);
});




