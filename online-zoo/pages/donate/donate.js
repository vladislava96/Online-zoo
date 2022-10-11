import BurgerMenu from "../../assets/js/burger-menu.js";

const burgerMenu = document.querySelector('.burger-menu');
const openMenuBtn = document.querySelector('.header__burger-menu-btn');
const closeMenuBtn = document.querySelector('.burger-menu__close-btn');
const backgroundBurger = document.querySelector('.menu-and-popup__background');

new BurgerMenu(burgerMenu, openMenuBtn, closeMenuBtn, backgroundBurger)