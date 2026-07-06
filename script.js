// 1. Сохранение названий кнопок (при нажатии на кнопку "СОХРАНИТЬ ИЗМЕНЕНИЯ")
document.getElementById('saveBtn').addEventListener('click', () => {
    const links = document.querySelectorAll('.nav-link');
    const menuData = [];
    links.forEach(link => {
        menuData.push({ text: link.innerText });
    });
    localStorage.setItem('menuNames', JSON.stringify(menuData));
    alert('Названия кнопок сохранены!');
});

// 2. Загрузка названий при открытии сайта
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

// 3. Редактирование по двойному клику (чтобы не мешать обычным ссылкам)
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('dblclick', function(e) {
        e.preventDefault(); 
        this.contentEditable = true;
        this.focus();
    });

    link.addEventListener('blur', function() {
        this.contentEditable = false;
    });
});
