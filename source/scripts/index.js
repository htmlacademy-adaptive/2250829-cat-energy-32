const navigationList = document.querySelector('.main-nav__list');
const navigationToggle = document.querySelector('.main-nav__toggle');
const mapImage = document.querySelector('.address__image');
const map = document.querySelector('.map');

navigationToggle.classList.add('main-nav__toggle--js');
navigationList.classList.add('main-nav__list--js');
mapImage.style = 'display: none;';
map.style = 'display: block';


navigationToggle.onclick = function() {
  navigationList.classList.toggle('main-nav__list--opened');
  navigationToggle.classList.toggle('main-nav__toggle--close');
};
