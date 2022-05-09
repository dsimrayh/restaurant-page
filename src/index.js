// Module imports
import template from './dir/template';

window.onload = () => template();



// FOR HEADER SCROLL FUNCTIONALITY

const hc = document.querySelector('#header-contents');
const hc2 = document.querySelector('#header-contents-2');
const nav2 = document.querySelector('#nav-2');

window.onscroll = () => {
    let scrollLimit = 0;
    if (window.pageYOffset > scrollLimit) {
        hc.style.opacity = 0;

        hc2.classList.add('display-mode-flex');
        nav2.classList.add('display-mode-flex');
    }
    else {
        hc.style.opacity = 1;

        hc2.classList.remove('display-mode-flex');
        nav2.classList.remove('display-mode-flex');
    }
}



// =================================================
// ========== TO BE MOVED TO MENU MODULE ===========
// =================================================

const menuItems = document.querySelectorAll('.test');

const foodList = {
    1: "gulf shrimp",
    2: "tuna bites",
    3: "scallops",
    4: "calamari",
    5: "grouper",
    6: "wahoo",
    7: "yellowtail snapper",
    8: "cobia",
    9: "hogfish",
    10: "mahi mahi",
    11: "red snapper",
    12: "crab legs",
    13: "key lime pie",
    14: "coconut cake",
    15: "margarita",
    16: "piña colada"
};

let counter = 1;

menuItems.forEach(item => {
    const food = foodList[`${counter}`];
    item.textContent = food;
    counter++;

    const el = document.createElement('p');
    el.textContent = "*Food Description Placeholder* Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam ab magni.";
    el.classList.add('menu-item-desc');
    item.appendChild(el);
}); 