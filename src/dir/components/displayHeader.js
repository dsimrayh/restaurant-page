export default function displayHeader() {
    const displayHeader = document.createElement('div');
    displayHeader.id = 'display-header';
    displayHeader.classList.add('user-select');
    displayHeader.textContent = '';

    return displayHeader;
}