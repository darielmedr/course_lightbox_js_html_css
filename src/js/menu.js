const menu = document.getElementById('menu-btn');
const sidenav = document.querySelector('.sidenav');

menu.addEventListener('click', () => {
    sidenav.classList.toggle('spread');
});

window.addEventListener('click', (e) => {
    if (sidenav.classList.contains('spread') && (e.target != menu) && (!sidenav.contains(e.target))) {
        sidenav.classList.toggle('spread');
    }
});