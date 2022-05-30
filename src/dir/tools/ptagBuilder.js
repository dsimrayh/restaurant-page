export default function ptagBuilder(text) {
    const p = document.createElement('p');
    p.classList.add('information-ptag');
    p.innerText = text;

    return p;
}