// Creates and returns navbar links: <li><a href="#">linkName</a></li>

export default function navBuilder(linkName) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.textContent = linkName;
    a.href = '#';

    a.dataset.pageName = linkName.toLowerCase();

    li.appendChild(a);

    return li;
}

