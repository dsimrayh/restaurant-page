export default function inputBuilder(inputTitle, inputName) {
    
    const label = document.createElement('label');
    label.textContent = inputTitle;

    const input = document.createElement('input');
    input.classList.add('input-control');
    input.type = 'text';
    input.id = inputName;
    input.name = inputName;
    input.placeholder = inputTitle;

    label.appendChild(input);

    return label;
}