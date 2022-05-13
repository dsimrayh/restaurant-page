// Same as headerContents, used for scrolling

import nav from './nav';

export default function headerContents2() {

    const contents = document.createElement('div');
    contents.id = 'header-contents-2';

    const restaurantName = document.createElement('h1');
    restaurantName.classList.add('user-select');
    restaurantName.textContent = 'Dorado Grill';

    const navbar = nav('nav-2');

    contents.appendChild(restaurantName);
    contents.appendChild(navbar);

    return contents;
}