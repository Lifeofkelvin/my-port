var typed = new Typed(".text", {
    strings: ["Frontend Developer." , "Web Developer." , "Creative."],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

const hamburger=document.querySelector('.hamburger');
const menu=document.querySelector(' .navbar')

hamburger.addEventListener('click', ()=>{
    hamburger.classList.toggle('close-menu');
  
        menu.classList.toggle('active');
   
})