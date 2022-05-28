// Creates and returns header-contents div | appends the name and navbar

import nav from './nav';

export default function headerContents() {

    const contents = document.createElement('div');
    contents.id = 'header-contents';

    const restaurantName = document.createElement('h1');
    restaurantName.classList.add('user-select');
    restaurantName.textContent = 'Dorado Grill';

    const navbar = nav('nav');

    contents.appendChild(restaurantName);
    contents.appendChild(navbar);

    return contents;
}


/*
            <div id="header-contents">
                <h1 class="user-select">Dorado Grill</h1>
                <ul id="nav" class="user-select">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Menu</a></li>
                    <li><a href=".#">Information</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>

            {display-header} *****************************************
*/


