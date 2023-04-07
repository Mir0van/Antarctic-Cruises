import './locomotive-scroll';
import {Burger} from './burger';

window.addEventListener('DOMContentLoaded', () => {

  window.addEventListener('load', () => {
    const burger = new Burger();
    burger.init();
  });
});
