const menu_btn = document.getElementById('menu_hambuguesa');
const menu = document.getElementById('lista')


menu_btn.onclick = function() {
    if (menu.style.display === 'none') {
      menu.style.display = 'flex';
    } else {
      menu.style.display = 'none';
    }
  };