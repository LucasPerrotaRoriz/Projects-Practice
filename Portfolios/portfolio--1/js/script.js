window.onload = function() {
    const btnMenu = document.querySelector('.hamburger');
    const mobile = document.querySelector('.hero__navigation--mobile')
    btnMenu.addEventListener('click', function() {
        btnMenu.classList.toggle('is-active');
        mobile.classList.toggle('is-active--mobile')
    });
}