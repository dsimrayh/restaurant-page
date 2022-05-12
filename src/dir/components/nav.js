// Generates and returns the navbar

import navBuilder from "../tools/navBuilder";

export default function nav() {

    const ul = document.createElement('ul');
    ul.classList.add('user-select');
    ul.id = 'nav';

    const home = navBuilder('home');
    const menu = navBuilder('menu');
    const info = navBuilder('info');
    const about = navBuilder('about');
    const contact = navBuilder('contact');

    ul.appendChild(home);
    ul.appendChild(menu);
    ul.appendChild(info);
    ul.appendChild(about);
    ul.appendChild(contact);
    

    return ul;
}

/*

        <ul id="nav" class="user-select">
            <li><a href="#">Home</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href=".#">Information</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
        </ul>

*/