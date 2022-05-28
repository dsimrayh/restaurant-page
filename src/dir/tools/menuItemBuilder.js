export default function menuItemBuilder() {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');
    menuItem.textContent = 'EXAMPLE MENU ITEM';

    return menuItem;
}