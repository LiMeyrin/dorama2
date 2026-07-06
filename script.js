document.getElementById('saveBtn').addEventListener('click', () => {
    const buttons = document.querySelectorAll('.nav-btn');
    const menuData = [];

    buttons.forEach(btn => {
        menuData.push({
            text: btn.innerText,
            link: btn.getAttribute('data-link')
        });
    });

    localStorage.setItem('menuConfig', JSON.stringify(menuData));
    alert('Изменения сохранены локально!');
});

// Загрузка при открытии
window.onload = () => {
    const saved = localStorage.getItem('menuConfig');
    if (saved) {
        const menuData = JSON.parse(saved);
        const buttons = document.querySelectorAll('.nav-btn');
        menuData.forEach((item, index) => {
            if (buttons[index]) {
                buttons[index].innerText = item.text;
            }
        });
    }
};
