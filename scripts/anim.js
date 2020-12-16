const hamburger = document.querySelector('.navbar__bars');
const navlinks = document.querySelector('.navbar__menu');
const links = document.querySelectorAll('.navbar__menu a');
const body = document.querySelector('body');

hamburger.addEventListener('click', () => {
  navlinks.classList.toggle('open');
  // links.forEach(link => {
  //   link.classList.toggle('fade');
  // });

  // style to make hamburger scrollable
  hamburger.classList.toggle('open');
  // style to hide and disable scroolable
  body.classList.toggle('open');
  
  for(i=0; i<links.length; i++) {
    links[i].classList.toggle('fade');
  }
});