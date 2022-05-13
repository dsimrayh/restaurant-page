export default function Home() {

    // Necessary to hide the <main> element for home page
    const displayInfo = document.querySelector('#display-info');
    displayInfo.style.display = 'none';

    // Change the default <header> element size for home page
    const header = document.querySelector('#header');
    header.classList.add('home-header'); 


    const homeContents = document.createElement('div');
    homeContents.id = 'home-contents';

    const logo = document.createElement('img');
    logo.id = 'logo';
    logo.src = '../src/images/logo.jpg';
    logo.alt = 'logo';

    const homeHeader = document.createElement('p');
    homeHeader.classList.add('home-text');
    homeHeader.id = 'home-header';
    homeHeader.textContent = 'Welcome to Dorado Grill!';

    const homeDescription = document.createElement('p');
    homeDescription.classList.add('home-text');
    homeDescription.id = 'home-description';
    homeDescription.textContent = 
    `
    Serving up the most incredible seafood in the Keys since 1965
    with an authentic island vibe that can't be topped!
    `;


    
    homeContents.appendChild(logo);
    homeContents.appendChild(homeHeader);
    homeContents.appendChild(homeDescription);

    return homeContents;
}
