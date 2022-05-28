import menuItemBuilder from '../tools/menuItemBuilder';
import menuCatBuilder from '../tools/menuCatBuilder';

export default function menuBuilder() {
    const displayInfo = document.querySelector('#display-info');

    displayInfo.appendChild(menuCatBuilder('appetizers'));
    displayInfo.appendChild(menuItemBuilder());
    displayInfo.appendChild(menuItemBuilder());
    displayInfo.appendChild(menuItemBuilder());
    displayInfo.appendChild(menuItemBuilder());;
    displayInfo.appendChild(menuCatBuilder('entrees'));
    displayInfo.appendChild(menuItemBuilder());
    displayInfo.appendChild(menuItemBuilder());
    displayInfo.appendChild(menuItemBuilder());
    displayInfo.appendChild(menuItemBuilder());
    displayInfo.appendChild(menuItemBuilder());
    displayInfo.appendChild(menuItemBuilder());
    displayInfo.appendChild(menuItemBuilder());
    displayInfo.appendChild(menuItemBuilder());
    displayInfo.appendChild(menuCatBuilder('desserts'));
    displayInfo.appendChild(menuItemBuilder());
    displayInfo.appendChild(menuItemBuilder());
    displayInfo.appendChild(menuCatBuilder('drinks'));
    displayInfo.appendChild(menuItemBuilder());
    displayInfo.appendChild(menuItemBuilder());
}