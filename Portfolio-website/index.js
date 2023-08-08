/* const navToggle =document.getElementById('nav-toggle')
const navOverlay =document.getElementById('nav-overlay')
function toggleNav() {
    navToggle.classList.toggle('active-nav')
    navOverlay.classList.toggle('show-nav-overlay')
}
navToggle.addEventListener('click', toggleNav)


 */
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


const btns = document.querySelectorAll(".navs");

btns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const id = e.target.dataset.id;
    if (id) {
      
      console.log('hey');
      btns.forEach(function (btn) {
        btn.classList.remove("active_nav");
      });
      e.target.classList.add("active_nav");
    }
  });
});

const sections = document.querySelectorAll("section");
if (window.location.href.includes('project.html')) {
  
const projectClose = document.getElementById('close_icon')
const projecTop = document.getElementById('Hotelzer')
document.addEventListener('scroll', function () {
  const windowHeight =  window.scrollY;

   if (windowHeight < 40) {
    projectClose.classList.remove("fixed_close");
  } else { 
    
    projectClose.classList.add("fixed_close");
   } 
})
}

window.addEventListener("scroll", function () {
  
  const scrollY = window.scrollY;

  
  sections.forEach((section) => {
    
    const sectionTop = section.getBoundingClientRect().top;

    
    const navHeight = nav.getBoundingClientRect().height;

    
    if (sectionTop - navHeight <= 0) {
      
      const sectionId = section.getAttribute("id");

      
      btns.forEach(function (btn) {
        btn.classList.remove("active_nav");
      });

      
      const selectedBtn = document.querySelector(`.navs[data-id="${sectionId}"]`);
      if (selectedBtn) {
        selectedBtn.classList.add("active_nav");
      }
    }
  });
});

const anchorLinks = document.querySelectorAll('a[href^="#"]');


anchorLinks.forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    
    const target = document.querySelector(this.getAttribute('href'));

    if (target) {
      
      const offset = 20; 
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;

      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});
