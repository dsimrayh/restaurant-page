import menuCatBuilder from "../tools/menuCatBuilder";
import ptagBuilder from "../tools/ptagBuilder";
import { text } from "../components/aboutContent";

export default function About() {
    
    // Handles 
    const displayInfo = document.querySelector('#display-info');
    displayInfo.id = 'display-info-2';

    const displayHeader = document.querySelector('#display-header');
    displayHeader.textContent = 'ABOUT';

    // Build
    displayInfo.appendChild(menuCatBuilder('About Dorado Grill'));
    displayInfo.appendChild(ptagBuilder(text[1]));
    displayInfo.appendChild(ptagBuilder(text[2]));

    displayInfo.appendChild(menuCatBuilder('Our Food'));
    displayInfo.appendChild(ptagBuilder(text[3]));
    displayInfo.appendChild(ptagBuilder(text[4]));

    displayInfo.appendChild(menuCatBuilder('Giving Back'));
    displayInfo.appendChild(ptagBuilder(text[5]));
    displayInfo.appendChild(ptagBuilder(text[6]));
    displayInfo.appendChild(ptagBuilder(text[7]));
    
}