document.getElementById('saveBtn').addEventListener('click', () => {
    const links = document.querySelectorAll('.nav-link');
    const menuData = [];

    links.forEach(link => {
        menuData.push({ text: link.innerText });
    });

    localStorage.setItem('menuConfig', JSON.stringify(menuData));
    alert('Настройки сохранены!');
});

window.onload = () => {
    const saved = localStorage.getItem('menuConfig');
    if (saved) {
        const menuData = JSON.parse(saved);
        const links = document.querySelectorAll('.nav-link');
        menuData.forEach((item, index) => {
            if (links[index]) links[index].innerText = item.text;
        });
    }
};
