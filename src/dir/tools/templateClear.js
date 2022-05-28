// Used to remove everything from template upon page switch

export default function templateClear() {
    const content = document.querySelector('#content');

    while(content.lastChild) {
        content.removeChild(content.lastChild);
    }
}