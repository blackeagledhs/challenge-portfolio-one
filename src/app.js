const instance = new Typewriter('.typetext', {
    strings: ['Desarrollador Full Stack', 'Reparador de PC'],
    autoStart: true,
    loop: true,
  });

const tablinks = document.getElementsByClassName('about__container-tab-links');
const tabcontents = document.getElementsByClassName('about__container-tab-contents');

function opentab(tabname){
  for(tablink of tablinks){
    tablink.classList.remove('active-link');
  }

  for(tabcontent of tabcontents){
    tabcontent.classList.remove('tab-active');
  }
  event.currentTarget.classList.add('active-link');
  document.getElementById(tabname).classList.add('tab-active');
}

const sidemenu = document.getElementById("sidemenu");

function openmenu(){
  sidemenu.style.right = '0';
}

function closemenu(){
  sidemenu.style.right = '-200px';
}

