import menuItemBuilder from '../tools/menuItemBuilder';
import menuCatBuilder from '../tools/menuCatBuilder';

export default function menuBuilder() {
    const displayInfo = document.querySelector('#display-info');

    displayInfo.appendChild(menuCatBuilder('APPETIZERS'));
    displayInfo.appendChild(menuItemBuilder());
    displayInfo.appendChild(menuItemBuilder());
    displayInfo.appendChild(menuItemBuilder());
    displayInfo.appendChild(menuItemBuilder());;
    displayInfo.appendChild(menuCatBuilder('ENTREES'));
    displayInfo.appendChild(menuItemBuilder());
    displayInfo.appendChild(menuItemBuilder());
    displayInfo.appendChild(menuItemBuilder());
    displayInfo.appendChild(menuItemBuilder());
    displayInfo.appendChild(menuItemBuilder());
    displayInfo.appendChild(menuItemBuilder());
    displayInfo.appendChild(menuItemBuilder());
    displayInfo.appendChild(menuItemBuilder());
    displayInfo.appendChild(menuCatBuilder('DESSERTS'));
    displayInfo.appendChild(menuItemBuilder());
    displayInfo.appendChild(menuItemBuilder());
    displayInfo.appendChild(menuCatBuilder('DRINKS'));
    displayInfo.appendChild(menuItemBuilder());
    displayInfo.appendChild(menuItemBuilder());
}