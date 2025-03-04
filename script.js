window.addEventListener("load", () => {
  const number = document.querySelector('.load__number');
  const btn = document.querySelector('.load__btn');
  const complete = document.querySelector('.load__complete');
  const background = document.querySelector('.main__background');

  let percent = 1;
  let blur = 30

  btn.addEventListener('click', (event) => {
    btn.style.display = 'none';

    let intervalo = setInterval(() => {
     
      percent++;

      blur -= 30/100;

      if(percent > 100){
        clearInterval(intervalo);
        complete.style.display = 'block';
      } else { 
        number.innerHTML = percent + '%';
        background.style.filter = `blur(${blur}px)`
      }
    },20);
  });
});