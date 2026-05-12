let current = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let timer;

function goTo(n) {
  slides[current].classList.remove('active');
  dots[current].classList.remove('active');

  current = n;
  if(current >= slides.length){
    current = 0;
  }
  if(current < 0){
    current = slides.length - 1;
  }

  slides[current].classList.add('active');
  dots[current].classList.add('active');
  resetTimer();
}

function move(dir){
  goTo(current + dir);
}

function resetTimer(){
  clearInterval(timer);
  timer = setInterval(function(){
    move(1);
  }, 5000);

}

resetTimer();