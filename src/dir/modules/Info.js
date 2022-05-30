import menuCatBuilder from '../tools/menuCatBuilder';
import hours from '../components/hours';
import ptagBuilder from '../tools/ptagBuilder';

export default function Info() {

    // Handles
    const displayInfo = document.querySelector('#display-info');
    displayInfo.id = 'display-info-2';

    const displayHeader = document.querySelector('#display-header');
    displayHeader.textContent = 'INFORMATION';


    // Build
    const HL = menuCatBuilder('Hours & Location');
    displayInfo.appendChild(HL);

    displayInfo.appendChild(hours());

    const location = ptagBuilder('');
    location.innerHTML = 'We are located at <strong>6567 Overseas Hwy, Islamorada, FL 33036</strong>';
    displayInfo.appendChild(location);

    const reservations = menuCatBuilder('Reservations');
    displayInfo.appendChild(reservations);

    displayInfo.appendChild(ptagBuilder('Please call us at (305)-779-2424 to make a reservation for up to 6 guests.'));
    displayInfo.appendChild(ptagBuilder('*Please note that due to capacity, reservations of more than 6 guests can be difficult to accomodate. We ask our guests to please call at least 72 hours in advance in order to book larger reservations.'));

    const specialEvents = menuCatBuilder('Special Events');
    displayInfo.appendChild(specialEvents);

    displayInfo.appendChild(ptagBuilder(`Book your private event with Islamorada's premier waterfront restaurant. Our beautiful seaside terrace is available for private events and buyouts for both lunch and dinner. Arrange your special event with us and enjoy exceptional service and the best seafood in the Florida Keys!`));
    displayInfo.appendChild(ptagBuilder(`Whether you are hosting an intimate social event, corporate outing, or large gathering, we are pleased to accommodate your group’s needs.`));
    displayInfo.appendChild(ptagBuilder('For more information on arranging a special event at Dorado Grill, please fill out the form below. We look forward to hearing from you!'));

    const btn = document.createElement('button');
    btn.id = 'private-event-btn';
    btn.textContent = 'Make an Inquiry';
    displayInfo.appendChild(btn);
}
