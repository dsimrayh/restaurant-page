// Creates and returns navbar links: <li><a href="#">linkName</a></li>

export default function navBuilder(linkName) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.textContent = linkName;
    a.href = '#';

    li.appendChild(a);

    return li;
}

