`use strict`;

const menu = document.querySelector(`.menu`);
const toggle = document.querySelector(`.header__toggle`);

function setInitial() {
  toggle.classList.remove(`header__toggle--nojs`);
  menu.classList.add(`menu--close`);
  toggle.classList.remove(`header__toggle--open`);
}

setInitial();

toggle.addEventListener(`click`, function() {
  if (toggle.classList.contains(`header__toggle--open`)) {
    menu.classList.add(`menu--close`);
    toggle.classList.remove(`header__toggle--open`);
  }
  else {
    menu.classList.remove(`menu--close`);
    toggle.classList.add(`header__toggle--open`);
  }
});
