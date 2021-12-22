const terug  = document.querySelector('.terug');
const volgende = document.querySelector('.volgende');

const track = document.querySelector('.track');

let carouselWidth = document.querySelector('.carousel-container').offsetWidth;

window.addEventListener('resize', () => {
  carouselWidth = document.querySelector('.carousel-container').offsetWidth;
})

let index = 0;

volgende.addEventListener('click', () => {
  index++;
  terug.classList.add('show');
  track.style.transform = `translateX(-${index * carouselWidth}px)`;
  
  if (track.offsetWidth - (index * carouselWidth) < carouselWidth) {
    volgende.classList.add('hide');
  }
})

terug.addEventListener('click', () => {
  index--;
  volgende.classList.remove('hide');
  if (index === 0) {
    terug.classList.remove('show');
  }
  track.style.transform = `translateX(-${index * carouselWidth}px)`;
})