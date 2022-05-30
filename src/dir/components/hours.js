export default function hours() {

    const hours = document.createElement('div');
    hours.classList.add('hours');

    const p1 = document.createElement('p');
    p1.textContent = 'Monday-Thursday: 12PM - 9PM';

    const p2 = document.createElement('p');
    p2.textContent = 'Friday & Saturday: 12PM - 11PM';

    const p3 = document.createElement('p');
    p3.textContent = 'Sunday: 12PM - 7PM';

    hours.appendChild(p1);
    hours.appendChild(p2);
    hours.appendChild(p3);

    return hours;
}