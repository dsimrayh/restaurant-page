import resetHeader from '../tools/resetHeader';
import menuBuilder from '../tools/menuBuilder';

export default function Menu() {
    resetHeader('grid');

    menuBuilder();

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


    const menuItems = document.querySelectorAll('.menu-item');

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
}

