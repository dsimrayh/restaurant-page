export default function menuCatBuilder(category) {
    const menuCategory = document.createElement('div');
    menuCategory.classList.add('menu-category');
    menuCategory.textContent = category;

    return menuCategory;
}