import menuCatBuilder from "../tools/menuCatBuilder";
import ptagBuilder from "../tools/ptagBuilder";
import contactForm from "../components/contactForm";
import { contactText } from "../components/contactFormText";

export default function Contact() {

    // Handles 
    const displayInfo = document.querySelector('#display-info');
    displayInfo.id = 'display-info-2';

    const displayHeader = document.querySelector('#display-header');
    displayHeader.textContent = 'ABOUT';

    // Build
    displayInfo.appendChild(menuCatBuilder('how to reach us'));

    const text = ptagBuilder('');
    text.innerHTML = contactText;
    displayInfo.appendChild(text);

    displayInfo.appendChild(contactForm());
}