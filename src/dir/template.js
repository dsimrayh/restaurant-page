// Creates the base elements that are uniform across the site
// header, main, footer --> appends to #content

import headerContents from './components/headerContents';
import headerContents2 from './components/headerContents2';
import mainContents from './components/mainContents';
import footerContents from './components/footerContents';

export default function template() {
    const content = document.querySelector('#content');
    
    const header = document.createElement('header');
    header.id = 'header';
    header.appendChild(headerContents());
    header.appendChild(headerContents2());
    // <display-header>
    

    const main = document.createElement('main');
    main.id = 'main';
    main.appendChild(mainContents());
    

    const footer = document.createElement('footer');
    footer.id = 'footer';
    footer.appendChild(footerContents())
    
    

    content.appendChild(header);
    content.appendChild(main);
    content.appendChild(footer);
}
