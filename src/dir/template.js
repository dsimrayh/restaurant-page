import headerContents from './components/headerContents';
import mainContents from './components/mainContents';
import footerContents from './components/footerContents';

export default function template() {
    const content = document.querySelector('#content');
    
    const header = document.createElement('header');
    header.id = 'header';
    // HOME HEADER
    header.classList.add('home-header');
    header.appendChild(headerContents());
    

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