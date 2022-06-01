export default function ptagBuilder(text) {
    const p = document.createElement('p');
    p.classList.add('information-ptag');
    p.textContent = text;

    return p;
}