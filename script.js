// Сохранение только текста кнопок, чтобы не ломать ссылки
document.getElementById('saveBtn').addEventListener('click', () => {
    const links = document.querySelectorAll('.nav-link');
    const menuData = [];

    links.forEach(link => {
        menuData.push({ text: link.innerText });
    });

    localStorage.setItem('menuNames', JSON.stringify(menuData));
    alert('Названия кнопок сохранены!');
});

// Загрузка названий, не трогая ссылки
window.onload = () => {
    const saved = localStorage.getItem('menuNames');
    if (saved) {
        const menuData = JSON.parse(saved);
        const links = document.querySelectorAll('.nav-link');
        menuData.forEach((item, index) => {
            if (links[index]) links[index].innerText = item.text;
        });
    }
};
